import { combineReducers } from "redux";
import signupReducer from "./auth/signup/signupReducer";
import { userReducer } from "../redux/auth/handleUser/currentUser";
import loginReducer from "./auth/login/loginReducer";
import logoutReducer from "./auth/logout/logoutReducer";
import resetPasswordReducer from "./auth/resetpassword/resetPasswordReducer";
import feedReducer from "./general/allFeeds/feedReducer";
import sendFeedReducer from "./general/sendFeed/sendFeedReducer";
import singleFeedReducer from "./general/singleFeed/singleFeedReducer";
import myFeedsReducer from "./general/myFeeds/myFeedsReducer";
import solvedFeedsReducer from "./general/solvedFeeds/solvedFeedsReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  currentUser: userReducer,
  login: loginReducer,
  logout: logoutReducer,
  resetPassword: resetPasswordReducer,
  feeds: feedReducer,
  sendFeed: sendFeedReducer,
  singleFeed: singleFeedReducer,
  myFeed: myFeedsReducer,
  solvedFeeds: solvedFeedsReducer,
});

export default rootReducer;
