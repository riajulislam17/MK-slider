import React from "react";
import "./Partner.css";
import pic1 from "../../Images/1.jpg";
import pic3 from "../../Images/3.png";
import pic4 from "../../Images/4.jpg";
import Header from "../Header/Header";

const Partner = () => {
  return (
    <div className="bg-partner">
      <Header></Header>
      <div className="py-3 px-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 gx-5 gy-3">
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

          <div class="col">
            <div class="card shadow">
              <img src={pic4} class="img-thumbnail" alt="..." />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <button type="button" class="btn btn-bg text-light">
            Click for more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partner;
