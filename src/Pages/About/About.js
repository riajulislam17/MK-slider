import React from "react";
import pic1 from "../../Images/1.jpg";
import pic3 from "../../Images/3.png";
import pic4 from "../../Images/4.jpg";
import Header from "../Header/Header";
import './About.css'

const About = () => {
  return (
    <div>
      <div className="bg-about">
        <Header></Header>
        <div className="py-3 px-5">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-3">
            <div class="col">
              <div class="card shadow">
                <img src={pic1} class="img-thumbnail" alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card shadow">
                <img src={pic4} class="img-thumbnail" alt="..." />
              </div>
            </div>

            <div class="col">
              <div class="card shadow">
                <img src={pic3} class="img-thumbnail" alt="..." />
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-light fw-bold">
              Some of our recent jobs are here,
            </h1>
            <h1 className="text-light fw-bold">find out more stories</h1>
          </div>

          <div className="pt-3">
            <button type="button" class="btn btn-bg text-light">
              See more stories like this
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
