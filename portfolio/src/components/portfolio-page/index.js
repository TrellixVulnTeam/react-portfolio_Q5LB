import React from "react";

export default function PortfolioPage() {
  return (
    <div>
      <nav class="nav justify-content-center">
        <a class="nav-link active" href="../index.html">
          Home
        </a>
        <a class="nav-link" href="">
          Portfolio
        </a>
      </nav>

      <div class="jumbotron bg-secondary-600">
        <h1 class="display-3 float-end">E.A. Martinez</h1>
        <p class="lead">Full-Stack Web Developer | MERN</p>
        <hr class="my-2" />
        <p>Project Portfolio</p>
      </div>

      <div class="container mx-auto bg-light text-dark">
        <div class="container">
          <div class="row my-5">
            <div class="col-sm">
              <a
                href="https://github.com/E-Martinez77/11_Homework"
                target="_blank"
              >
                <img
                  src="../assets/img/NoteTaker.png"
                  width="600"
                  alt=""
                  class="im-fluid rounded mx-auto d-block"
                />
              </a>
            </div>
            <div class="col-sm">
              <a
                href="https://github.com/E-Martinez77/Homework_12"
                target="_blank"
              >
                <img
                  src="../assets/img/EMS.png"
                  alt="Employee Management System"
                  class="img-fluid rounded mx-auto d-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto bg-light text-dark">
        <div class="container">
          <div class="row my-5">
            <div class="col-sm">
              <a href="https://jab-effects.herokuapp.com/" target="_blank">
                <img
                  src="../assets/img/JabEffects.png"
                  height="400"
                  width="500"
                  alt=""
                  class="im-fluid rounded mx-auto d-block"
                />
              </a>
            </div>
            <div class="col-sm">
              <a
                href="https://github.com/E-Martinez77/09_Homework"
                target="_blank"
              >
                <img
                  src="../assets/img/ReadMeGenerator.png"
                  height="4000"
                  alt=""
                  class="img-fluid rounded mx-auto d-block"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
