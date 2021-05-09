import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";

function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <div className="awesome"></div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      {/* Font Awesome icons (free version)*/}
      {/* Google fonts*/}
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
        rel="stylesheet"
        type="text/css"
      />
      {/* Core theme CSS (includes Bootstrap)*/}
      <link href="css/styles.css" rel="stylesheet" />

      {/* Masthead*/}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To</div>
          <div className="masthead-heading text-uppercase">Doubt Exchange</div>
          <a className="btn btn-primary btn-xl " href="/signup">
            Get Started
          </a>
        </div>
      </header>
      {/* Features*/}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Features</h2>
            <h3 className="section-subheading text-muted">
              Below are the some features of this platform
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
              </span>
              <h4 className="my-3">Clean UI</h4>
              <p className="text-muted">
                Designing is done while keeping user's comfort in mind, there is
                no jumbled UI to force you for learning how to use it
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-laptop fa-stack-1x fa-inverse" />
              </span>
              <h4 className="my-3">Used Markdown</h4>
              <p className="text-muted">
                You can post your queries and answer related to them by
                Markdown, a very light and powerful markup language for
                formatting texts.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-lock fa-stack-1x fa-inverse" />
              </span>
              <h4 className="my-3">Authentication</h4>
              <p className="text-muted">
                Your account and queries are protected, no guest or other user
                can modify or delete them, only you can access what to do with
                them.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* About*/}
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading ">
              Do not let your doubts dull your knowledge...!!
            </h3>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  The inspiration to build this platform is Stack Overflow,
                  those who don't know, Stack Overflow is a question and answer
                  site for professional and enthusiast programmers
                </p>
                <p className="large text-muted">
                  The sole purpose to create this platform is to allow students
                  to keep record of their academic doubt and interact with a
                  whole community of like minded people to get help from.
                  Students can answer each other questions and when a satisfying
                  answer is achieved the author of the question can close the
                  query.
                </p>
                <p className="large text-muted">
                  Due to this pandemic many students are not able to get a nice
                  coding exposure, this platform will allow you to ask doubts
                  and get relevant answers from the other students. You are
                  going to use markdown which is very essential for
                  documentation so overall using this platform also helping you
                  to learn a nice markup language.
                </p>
                <p className="large text-muted">
                  Your doubtes will be saved on database and you can check them
                  in your dashboard, if you get the satisfactory answer then you
                  can also mark that answer for future reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How to use*/}
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">How this work ?</h2>
            <h3 className="section-subheading text-muted">
              Below is a 5 step roadmap that'll help you to know how this
              platform works.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/1.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Step: 1</h4>
                  <h4 className="subheading">Create your account</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Register yourself with just an email and password so that
                    other user, cannot disturb your queries.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/2.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Step: 2</h4>
                  <h4 className="subheading">Have a doubt?</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    living inside a doubt can be worst, so post it, people who
                    know will help you and solve your queries.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/3.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Step: 3</h4>
                  <h4 className="subheading">Read queries of others.</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    In feed menu, you can see what others are asking, it's
                    essential because we are a community, so if we can help then
                    why not.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/4.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Step: 4</h4>
                  <h4 className="subheading">Satisfied by the answer?</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    When you get the satisfactory answer, mark that answer as
                    solution and close your query, so that it can be removed
                    from the open queries.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Community.
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Team*/}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Project's Cool Team
            </h2>
            <h3 className="section-subheading text-muted">
              Following people contibuted in making it successful
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/1.jpeg"
                  alt="..."
                />
                <h4>Swayam Singh</h4>
                <p className="text-muted">Design and Functionality</p>

                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://twitter.com/_s_w_a_y_a_m_"
                >
                  <TwitterIcon />
                </a>

                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/krishna.vasudev.31392/"
                >
                  <FacebookIcon />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://github.com/practice404"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Swayam is currently pursuing Bachelor's degree in tech. from
                JKIAPT. He's a first year student currenty learning Web
                development and likes pop and EDM music.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Tech used*/}
      <div className="py-5">
        <h2 className="section-heading text-uppercase text-center">
          Technology used
        </h2>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
                  alt="..."
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img
                  className="img-fluid img-brand d-block mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg"
                  alt="..."
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact*/}

      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Connect to developer
            </h2>
            <h3 className="section-subheading text-muted">
              connect to the developer for contibuting on this project or future
              collaboration
            </h3>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <a href="https://twitter.com/_s_w_a_y_a_m_">
                  <TwitterIcon fontSize="large" />
                </a>
                <p>Twitter</p>
              </div>
              <div className="col-lg-4">
                <a href="mailto:hawkempire007@gmail.com">
                  <MailIcon fontSize="large" />
                </a>
                <p>Gmail</p>
              </div>
              <div className="col-lg-4">
                <a href="https://github.com/practice404">
                  <GitHubIcon fontSize="large" />
                </a>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">Copyright © Doubt Exchange {year}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
