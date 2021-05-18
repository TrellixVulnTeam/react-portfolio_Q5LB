import React from "react";
import NoteTaker from "../img/NoteTaker.png";
import EMS from "../img/EMS.png";
import JabEffects from "../img/JabEffects.png";
import ReadMeGen from "../img/ReadMeGenerator.png";
import { Link } from "react-router-dom";

export default function PortfolioPage() {
  return (
    <div>
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="#">
          Home
        </a>
        <a class="nav-link" href="">
          Portfolio
        </a>
      </nav>

      <div class="jumbotron bg-secondary-600">
        <h1 class="display-3">E.A. Martinez</h1>
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
                  src={NoteTaker}
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
                  src={EMS}
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
                  src={JabEffects}
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
                  src={ReadMeGen}
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
