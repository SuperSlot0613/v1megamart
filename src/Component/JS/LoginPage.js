import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../CSS/LoginPage.css";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import {
  selectUser,
  SMALL_LOGIN,
  SMALL_PROFILE,
  SET_USER,
} from "../../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../Firebase";
import firebase from "firebase";
import { useHistory } from "react-router";

function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [Continue, setContinue] = useState(true);
  const [OtpForm, setOtpForm] = useState(false);

  const [userInfo, setuserInfo] = useState([]);
  const [disableOTP, setdisableOTP] = useState(false);
  const history = useHistory();

  const [UserInfo, setInfo] = useState({
    FirstName: "",
    LastName: "",
    Enterotp: "",
    City: "",
    State: "",
    Zip: "",
    FirstData: "",
    password: "",
  });

  useEffect(() => {
    db.collection("UserInfo").onSnapshot((snapshot) => {
      setuserInfo(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  // console.log(userInfo);

  function configureCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("Recaptca varified");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }

  function onSignInSubmit(e) {
    // setDisable(true);
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + UserInfo.FirstData;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
      })
      .catch((error) => {
        console.log("SMS not sent");
      });
  }

  function onSubmitOTP(e) {
    // setDisable(false);
    e.preventDefault();
    const findMobile1 = userInfo.findIndex(
      (userinfo) => userinfo.data.FirstData === UserInfo.FirstData
    );
    const code = UserInfo.Enterotp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        if (findMobile1 < 0) {
          db.collection("UserInfo").doc().set({
            FirstData: UserInfo.FirstData,
            Password: UserInfo.password,
            FirstName: UserInfo.FirstName,
            LastName: UserInfo.LastName,
            State: UserInfo.State,
            city: UserInfo.City,
            Zip: UserInfo.Zip,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          dispatch(SET_USER(UserInfo));
        } else {
          dispatch(SET_USER(userInfo[findMobile1]?.data));
        }
        dispatch(SMALL_LOGIN(false));
      })
      .catch((error) => {
        console.log("Error is occures");
      });
  }

  const signIn = (e) => {
    e.preventDefault();
    const findEmail1 = userInfo.findIndex(
      (userinfo) => userinfo.data.FirstData === UserInfo.FirstData
    );
    auth
      .signInWithEmailAndPassword(UserInfo.FirstData, UserInfo.password)
      .then((auth) => {
        console.log("already login");
        // history.push("/");
        if (findEmail1 < 0) {
          db.collection("UserInfo").doc().set({
            FirstData: UserInfo.FirstData,
            Password: UserInfo.password,
            FirstName: UserInfo.FirstName,
            LastName: UserInfo.LastName,
            State: UserInfo.State,
            city: UserInfo.City,
            Zip: UserInfo.Zip,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
          dispatch(SET_USER(UserInfo));
        }else {
          dispatch(SET_USER(userInfo[findEmail1]?.data));
        }
        dispatch(SMALL_LOGIN(false));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(userInfo);

    const findEmail = userInfo.findIndex(
      (userinfo) => userinfo.data.FirstData === UserInfo.FirstData
    );
    const findMobile = userInfo.findIndex(
      (userinfo) => userinfo.data.FirstData === UserInfo.FirstData
    );
    console.log(userInfo[findMobile]?.data);
    if (!isNaN(UserInfo.FirstData)) {
      if (findMobile >= 0) {
        onSignInSubmit(e);
        setOtpForm(true);
      } else {
        onSignInSubmit(e);
        setContinue(false);
      }
    } else {
      if (findEmail >= 0) {
        signIn(e);
      } else {
        auth
          .createUserWithEmailAndPassword(UserInfo.FirstData, UserInfo.password)
          .then((auth) => {
            if (auth) {
              // history.push("/");
              console.log("Email is verfiy");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
        setContinue(false);
        setdisableOTP(true);
      }
    }
  };

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
              <div id="sign-in-button"></div>
              {OtpForm ? (
                <div className="login_input">
                  <form className="row g-3 login_form1">
                    <div className="col-md-4 inputtag_div">
                      <label for="validationDefault01" className="form-label">
                        Enter The OTP
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="validationDefault01"
                        required
                        value={UserInfo.Enterotp}
                        onChange={(e) => {
                          setInfo({ ...UserInfo, Enterotp: e.target.value });
                        }}
                      />
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary continue_btn"
                        type="submit"
                        onClick={(e) => onSubmitOTP(e)}
                      >
                        CONTINUE
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
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
                      <div className="col-md-4 inputtag_div">
                        <label for="validationDefault01" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="validationDefault01"
                          required
                          value={UserInfo.password}
                          onChange={(e) => {
                            setInfo({ ...UserInfo, password: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary continue_btn"
                          type="submit"
                          onClick={(e) => {
                            if (UserInfo.FirstData !== "") {
                              // setContinue(false);
                              register(e);
                            }
                          }}
                        >
                          CONTINUE
                        </button>
                      </div>
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
                      <div className={`col-md-3 ${disableOTP && "disableotp"}`}>
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
                          <label
                            className="form-check-label"
                            for="invalidCheck2"
                          >
                            Agree to terms and conditions
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary continue_btn"
                          type="submit"
                          onClick={(e) => {
                            // setContinue(false);
                            // register(e);
                            if (!isNaN(UserInfo.FirstData)) {
                              onSubmitOTP(e);
                            } else {
                              signIn(e);
                            }
                          }}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
