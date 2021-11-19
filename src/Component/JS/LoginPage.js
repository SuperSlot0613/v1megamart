import { IconButton } from "@mui/material";
import React, { useState } from "react";
import "../CSS/LoginPage.css";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import { selectUser, SMALL_LOGIN } from "../../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [Continue, setContinue] = useState(true);
  const [OtpForm, setOtpForm] = useState(true);

  const [UserInfo, setInfo] = useState({
    FirstName: "",
    LastName: "",
    Enterotp: "",
    City: "",
    State: "",
    Zip: "",
    FirstData: "",
  });

  return (
    <div className="loginpage">
      <div className="loginpage_container">
        <div className="loginpage_card">
          <div
            className="login_close"
            onClick={() => dispatch(SMALL_LOGIN(false))}
          >
            <IconButton className="login_closeprofile">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="login_content">
            <h5>Welcome To V1 Mega Mart</h5>
            <p>Join/sign in using</p>
            <div className="login_signlogo">
              <div className="login_facebook">
                <FacebookIcon className="fb_logo" color="primary" />
                <span>Facebook</span>
              </div>
              <div
                className="login_google"
                style={{ border: "2px solid #df4a32", color: "#df4a32" }}
              >
                <GoogleIcon className="fb_logo" color="rgb(66, 133, 244)" />
                <span>Google</span>
              </div>
            </div>
            <div className="or-separator">
              <hr></hr>
              <span
                className="or-text-desktop"
                style={{ marginTop: "0px", marginBottom: "12px" }}
              >
                Or
              </span>{" "}
              <hr></hr>
            </div>
            <div className="login_inputbox">
              <div className="login_input">
                {Continue ? (
                  <form className="row g-3 login_form1">
                    <div className="col-md-4 inputtag_div">
                      <label for="validationDefault01" className="form-label">
                        Enter Mobile Number / Email*
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        value={UserInfo.FirstData}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, FirstData: e.target.value });
                        }}
                      />
                    </div>
                    {/* <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        />
                        <label className="form-check-label" for="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                    </div> */}
                    <div className="col-12">
                      <button
                        className="btn btn-primary continue_btn"
                        type="submit"
                        // onClick={() => setContinue(false)}
                      >
                        CONTINUE
                      </button>
                    </div>
                    {/* <Button
                      className="continue_btn btn btn-primary"
                      type="submit"
                      onClick={() => setContinue(false)}
                    >
                      CONTINUE
                    </Button> */}
                  </form>
                ) : (
                  <form className="row g-3 login_form">
                    <div className="col-md-5">
                      <label for="validationDefault01" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control text_inputtag"
                        id="validationDefault01"
                        required
                        value={UserInfo.FirstName}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, FirstName: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-md-5">
                      <label for="validationDefault02" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control text_inputtag"
                        id="validationDefault02"
                        required
                        value={UserInfo.LastName}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, LastName: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label for="validationDefault03" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control text_inputtag"
                        id="validationDefault03"
                        required
                        value={UserInfo.City}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, City: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-md-4">
                      <label for="validationDefault04" className="form-label">
                        State
                      </label>
                      <select
                        className="form-select text_inputtag"
                        id="validationDefault04"
                        required
                        value={UserInfo.State}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, State: e.target.value });
                        }}
                      >
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label for="validationDefault05" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control text_inputtag"
                        id="validationDefault05"
                        required
                        value={UserInfo.Zip}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, Zip: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-md-3">
                      <label for="validationDefault05" className="form-label">
                        Enter OTP
                      </label>
                      <input
                        type="text"
                        className="form-control text_inputtag"
                        id="validationDefault05"
                        required
                        value={UserInfo.Enterotp}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, Enterotp: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="invalidCheck2"
                          required
                        />
                        <label className="form-check-label" for="invalidCheck2">
                          Agree to terms and conditions
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary continue_btn"
                        type="submit"
                        onClick={() => setContinue(false)}
                      >
                        CONTINUE
                      </button>
                    </div>
                  </form>
                )}
                <p>
                  By sign In I agree{" "}
                  <span style={{ color: "blue" }}>Terms & Condition</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
