import React from "react";
import "./Pages.css";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Partner from "./Partner/Partner";
import Work from "./Work/Work";

const Pages = () => {
  return (
    <div>
      <div class="row g-0">
        <div class="col-10">
          <Home></Home>
          {/* <Work></Work>
          <Partner></Partner>
          <About></About>
          <Contact></Contact> */}
        </div>
        <div class="col-2 bg-menubar d-flex  align-items-center">
          <div className="text-light text-end w-100 pe-3 text-decoration-none fw-bold fs-5 text-light" onScroll={e=>{}}>
            <div>
              <a
                className="text-decoration-none fw-bold fs-5 text-light"
                href="/"
              >
                Home
              </a>
            </div>
            <div>
              <a
                className="text-decoration-none fw-bold fs-5 text-light"
                href="/work"
              >
                What we do
              </a>
            </div>
            <div>
              <a
                className="text-decoration-none fw-bold fs-5 text-light"
                href="/partner"
              >
                Our partner
              </a>
            </div>
            <div>
              <a
                className="text-decoration-none fw-bold fs-5 text-light"
                href="/about"
              >
                Portfolio
              </a>
            </div>
            <div>
              <a
                className="text-decoration-none fw-bold fs-5 text-light"
                href="/contact"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
