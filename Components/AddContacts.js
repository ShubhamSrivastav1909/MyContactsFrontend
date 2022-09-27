import React, { useState } from "react";
import {Routes,Route,Link, useNavigate} from "react-router-dom";

function AddContacts() {
  return (
  <div class="container">
  <div class="card">
  <div class="card-body">
    <form className="row g-14">
      <div class="container px-4 text-center">
        <div class="row gx-12">
          <div class="col">
            <div class="p-3 border bg-light">CONTACT APPLICATION</div>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          <img width="30" height="30" class="d-inline-block align-top" alt="" />
          Add Contact Details
        </a>
      </nav>
      <div className="col-md-6">
        <label for="inputName4" className="form-label">
          Name
        </label>
        <input type="Name" className="form-control" id="inputName4" />
      </div>
      <div className="col-md-6">
        <label for="inputphonenNumber4" className="form-label">
          phoneNumber
        </label>
        <input type="phoneNumber" className="form-control" id="phoneNumber4" />
      </div>
      <div className="col-md-6">
        <label for="inputEmail4" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="inputEmail4" />
      </div>
      
      <div className="col-12">
        <label for="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="Apartment, studio, or floor"
        />
      </div>
      <div className="col-md-6">
        <label for="inputCity" className="form-label">
          City
        </label>
        <input type="text" className="form-control" id="inputCity" />
      </div>
      <div className="col-md-4">
        <label for="inputState" className="form-label">
          State
        </label>
        <select id="inputState" className="form-select">
          <option selected>Choose...</option>
          <option>...</option>
        </select>
      </div>
      <div className="col-md-2">
        <label for="inputZip" className="form-label">
          Zip
        </label>
        <input type="text" className="form-control" id="inputZip" />
      </div>
      <div className="col-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="gridCheck" />
          <label className="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">
          Default file input example
        </label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div className="col-12">
      <Link to = "/home" className = "btn btn-primary mb-2" > Submit </Link>
      </div>
    </form>
    </div>
    </div>
    </div>
  );
}

export default AddContacts;
