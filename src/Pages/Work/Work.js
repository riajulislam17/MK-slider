import React from "react";
import Header from "../Header/Header";
import "./Work.css";
import pic1 from "../../Images/1.jpg";
import pic2 from "../../Images/2.png";
import pic3 from "../../Images/3.png";
import pic4 from "../../Images/4.jpg";
import pic5 from "../../Images/5.png";
import pic6 from "../../Images/6.png";
import pic7 from "../../Images/7.jpg";
import pic8 from "../../Images/8.jpg";

const Work = () => {
  return (
    <div className="bg-work text-light mx-0 px-0">
      <Header></Header>
      <div className="py-3 px-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-3">
          <div class="col">
            <div class="card shadow">
              <img
                src={pic1}
                class="card-img-top img-fluid img m-auto p-1"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">
                  Business Management Software
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic2}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">
                  Digital Marketing Solutions
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic3}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">
                  Mobile app & Web Development
                </p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic4}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">E-Commerce Solutions</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic5}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">Affiliate Marketing</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic6}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">Ad Network Solutions</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic7}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">Personal Branding</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card shadow">
              <img
                src={pic8}
                class="card-img-top img-fluid img m-auto"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text title text-center">Bulk SMS Service</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <button type="button" class="btn btn-warning">
            Check out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
