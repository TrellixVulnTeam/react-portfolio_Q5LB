import React from "react";

export default function HomePage() {
  return (
    <div>
      <nav class="nav justify-content-center">
        <a class="nav-link active" href="#">
          Home
        </a>
        <a class="nav-link" href="./portfolio/index.html">
          Portfolio
        </a>
      </nav>

      <div class="jumbotron bg-secondary-600">
        <h1 class="display-3 float-end">E.A. Martinez</h1>
        <p class="lead">Full-Stack Web Developer | MERN</p>
        <hr class="my-2" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col d-flex justify-content-center">
            <img
              src="./assets/img/avatar2.png"
              class="rounded "
              alt="avatar"
              width="300"
              height="300"
            />
          </div>
          <div class="col-8 border my-4 ">
            <div class="container">
              <div class="col">
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

      <div class="container">
        <a
          href="http://github.com/E-Martinez77"
          target="_blank"
          class="fa fa-github fa-5x"
        ></a>
      </div>
    </div>
  );
}
