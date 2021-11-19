import React, { useEffect, useState, useRef } from "react";
import "../CSS/Footerbody.css";
import i1 from "../../assets/image/f.png";
import i2 from "../../assets/image/inst.png";
import i3 from "../../assets/image/in.png";
// import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
// import "react-slideshow-image/dist/styles.css";
// import Carousel from "react-elastic-carousel";
// import Programs, { Popedprogram } from "../Programs/Program";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../../Firebase";
import { useForm } from "react-hook-form";

const Validate = (data) => {
  db.collection("subscribeEmail").doc().set({
    email: data.email,
  });
  // notification();
};

function Footerbody() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  return (
    <div>
      <div id="footerend">
        <div className="footertitle">Lorem Ipsum</div>
        <div className="footertext">
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus
          auctor dui, et varius felis eleifend et. Cras sodales ipsum pharetra
          sodales ultrices. Sed ullamcorper felis a nulla elementum suscipit.
          Pellentesque finibus rutrum augue, nec fermentum metus scelerisque sit
          amet.
        </div>
        <br />
        <div className="subscribe">
          <button
            id="subbtn"
            style={{ width: "100px", height: "32px", border: "none" }}
            type="submit"
            onClick={handleSubmit(Validate)}
          >
            Subscribe
          </button>
          <input
            id="newsletter1"
            type="text"
            name="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,4}$/,
                message: "Please enter valid email.",
              },
            })}
            className="form-control"
            placeholder="Enter your email address"
            style={{ width: "300px", height: "30px" }}
          />
          {errors?.email && (
            <p
              style={{
                alignItems: "center",
                justifyContent: "center",
                color: "red",
                fontSize: "20px",
                paddingTop: "10px",
              }}
            >
              {errors.email.message}
            </p>
          )}
        </div>
        <br />
      </div>
      <div id="footericonsbody">
        <br />
        <br />
        <br />
        <div className="iconscontainer">
          <div className="facebook" style={{ marginRight: "5%" }}>
            <a target="_blank " href="https://www.facebook.com/profile.php?id=100021200403466">
              <img
                src={i1}
                alt="Facebook"
                classname="fimg"
                style={{ marginTop: "30%" }}
              ></img>
            </a>
          </div>
          <div className="instagram" style={{ marginRight: "5%" }}>
            <a
              target="_blank "
              href="https://www.instagram.com/saurabh0663/"
            >
              <img
                src={i2}
                alt="instgram"
                classname="iimg"
                style={{ marginTop: "30%" }}
              ></img>
            </a>
          </div>
          <div className="linkedin">
            <a
              target="_blank "
              href="https://www.linkedin.com/in/saurabh-yadav-2aa35221a/"
            >
              <img
                src={i3}
                alt="instgram"
                classname="limg"
                style={{ marginTop: "30%" }}
              ></img>
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="redirecttitles">
          <Link
            to="/home"
            style={{ textDecoration: "none", marginRight: "5%" }}
          >
            <p
              className="rtitles"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </p>
          </Link>
          <Link
            to="/aboutus"
            style={{ textDecoration: "none", marginRight: "5%" }}
          >
            <p
              className="rtitles"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              About us
            </p>
          </Link>
        </div>
        <br />
        <br />
      </div>
      <div id="copyrightbody">
        <br />
        <div className="copyrighttext">
          © 2021 Company, Inc. All rights reserved.
        </div>
        <br />
      </div>
    </div>
  );
}

export default Footerbody;
