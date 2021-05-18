import React from "react";
import Avatar from "../img/avatar2.png";

export default function HomePage() {
  return (
    <div>
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="#">
          Home
        </a>
        <a className="nav-link" href="./portfolio">
          Portfolio
        </a>
      </nav>

      <div className="jumbotron bg-secondary-600">
        <h1 className="display-3">E.A. Martinez</h1>
        <p className="lead">Full-Stack Web Developer | MERN</p>
        <hr className="my-2" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img
              src={Avatar}
              className="rounded "
              alt="avatar"
              width="300"
              height="300"
            />
          </div>
          <div className="col-8 border my-4 ">
            <div className="container">
              <div className="col">
                <p>
                  Hello, I am E.A. Martinez. I'm a Full-Stack Web Developer. I
                  attended the University of Utah's Full-Stack Coding Bootcamp.
                  It was one of the most challenging and rewarding experiences
                  I've taken on my career development path. My tech stack is
                  MERN with exposure to Handlebars, ORM and SQL.
                </p>
                <br />
                <p>
                  Professionally I have primarily worked in Sales and Marketing.
                  I have experience with Google Tag Manager and Google
                  Analytics. In my free time I enjoy playing with synthesizers
                  and hanging out with my cockatiels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <a
          href="http://github.com/E-Martinez77"
          target="_blank"
          className="fa fa-github fa-5x"
        ></a>
      </div>
    </div>
  );
}
