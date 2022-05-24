import React from "react";
import Header from "../Header/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="bg-contact">
      <Header></Header>
      <div className="p-3">
        <div>
        <div class="row">
  <div class="col">
    <input type="text" class="form-control rounded-pill shadow mb-2" placeholder="Full Name" aria-label="First name"/>
    <input type="text" class="form-control rounded-pill shadow mb-2" placeholder="Company/Organization" aria-label="First name"/>
    <input type="number" class="form-control rounded-pill shadow mb-2" placeholder="Phone" aria-label="First name"/>
    <input type="email" class="form-control rounded-pill shadow mb-2" placeholder="Email" aria-label="First name"/>
  </div>
  <div class="col">
    <textarea type="text" class="form-control shadow" rows={5} placeholder="Please describe your requirements" aria-label="Last name"/>
    <div className="py-2 text-end"><button type="button" class="btn btn-submit text-light shadow px-5">Submit</button></div>
  </div>
</div>
        </div>
        <div>
          <h3 className="email">support@pl.com</h3>
          <p className="email-text">Click to copy the email</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
