import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
dotenv.config();
const Schema = mongoose.Schema;

let today = new Date().toDateString();
const PORT = process.env.PORT || 5000;

const newUri = process.env.MONGODB_URI;
mongoose.connect(newUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "build")));

// creating Schema

const userSchema = new Schema({
  email: String,
  username: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  comment: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const postSchema = new Schema({
  solved: { type: Boolean, default: false },
  title: String,
  body: String,
  date: String,
  author: { type: Schema.Types.ObjectId, ref: "User" },
  comment: [],
});

const commentSchema = new Schema({
  comment: String,
  solution: { type: Boolean, default: false },
  date: String,
  post: { type: Schema.Types.ObjectId, ref: "Post" },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

// models

const userModel = mongoose.model("User", userSchema);
const postModel = mongoose.model("Post", postSchema);
const commentModel = mongoose.model("Comment", commentSchema);

app.get("/fetch-feeds", (req, res) => {
  postModel.find({}, (err, posts) => {
    if (!err) {
      const showPosts = posts.filter((post) => {
        return post.solved === false;
      });
      res.status(200).json(showPosts);
    }
  });
});

app.get("/fetch-solved-feeds", (req, res) => {
  postModel.find({}, (err, posts) => {
    if (!err) {
      const showPosts = posts.filter((post) => {
        return post.solved === true;
      });
      res.status(200).json(showPosts);
    }
  });
});

app.post("/new-user", (req, res) => {
  const { email, username } = req.body;
  const newUser = new userModel({
    email: email,
    username: username,
    posts: [],
    comment: [],
  });
  newUser.save(() => {
    res.send("welcome buddy");
  });
});

app.post("/get-query", (req, res) => {
  const { title, query, email } = req.body;
  userModel.findOne({ email: email }, (err, user) => {
    if (!err) {
      const post = new postModel({
        date: today,
        title: title,
        body: query,
        author: user._id,
        comment: [],
      });
      post.save(() => {
        let posts = user.posts;
        posts.push(post._id);
        userModel.updateOne({ _id: user._id }, { posts: posts }, (err) => {
          if (!err) {
            return res.send("submitted");
          }
        });
      });
    } else {
      res.send("user not exist");
    }
  });
});

app.get("/view-post/:id", (req, res) => {
  const id = req.params.id;
  postModel
    .findById(id)
    .populate("author")
    .exec((err, post) => {
      res.status(200).json(post);
    });
});

app.post("/get-comment", (req, res) => {
  const { author, comment, id } = req.body;

  userModel.findOne({ email: author }, (err, user) => {
    if (!err) {
      const new_comment = new commentModel({
        date: today,
        comment: comment,
        post: id,
        author: user._id,
      });
      new_comment.save(() => {
        postModel.findById(id, (err, post) => {
          if (!err) {
            let postComments = post.comment;
            postComments.push({
              date: today,
              solution: false,
              id: new_comment._id,
              author: user.username,
              email: user.email,
              comment: comment,
            });
            postModel.updateOne(
              { _id: post._id },
              { comment: postComments },
              (err) => {
                if (!err) {
                  res.send("comment submitted");
                }
              }
            );
          }
        });
      });
    }
  });
});

app.get("/my-feeds", (req, res) => {
  const email = req.query.email;
  userModel.findOne({ email: email }, (err, user) => {
    const id = user._id;
    const username = user.username;
    postModel.find({ author: id }, (err, posts) => {
      if (!err) {
        res.status(200).json({ posts, username });
      }
    });
  });
});

app.post("/solved-query", (req, res) => {
  const { id } = req.body;
  postModel.updateOne({ _id: id }, { solved: true }, (err) => {
    if (!err) {
      res.send("solved");
    }
  });
});

app.post("/solution-comment", (req, res) => {
  const { c_id, p_id } = req.body;

  commentModel.updateOne({ _id: c_id }, { solution: true }, (err) => {
    if (!err) {
      postModel.findById(p_id, (err, post) => {
        if (!err) {
          let allComments = post.comment;
          let updatedComments = allComments.map((item) => {
            if (item.id == c_id) {
              item.solution = true;
            }
            return item;
          });

          postModel.updateOne(
            { _id: p_id },
            { comment: updatedComments },
            (err) => {
              if (!err) {
                res.send("solution granted");
              }
            }
          );
        }
      });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
