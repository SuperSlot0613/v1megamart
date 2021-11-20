import { IconButton } from "@mui/material";
import React from "react";
import "../CSS/SmallProfile.css";
import CloseIcon from "@mui/icons-material/Close";
import {
  selectUser,
  SET_USERLOGOUT,
  SMALL_LOGIN,
  SMALL_PROFILE,
} from "../../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

function SmallProfile() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="smallProfile">
      {user.length === 0 ? (
        <div
          className="smallprofile_container1"
          onMouseLeave={() => dispatch(SMALL_PROFILE(false))}
        >
          <div className="small_head1">
            <Button
              className="firstsign_in"
              onClick={() => dispatch(SMALL_LOGIN(true))}
            >
              SIGN IN
            </Button>
            <p>To Order the Item Please Sign In</p>
          </div>
        </div>
      ) : (
        <div className="smallprofile_container">
          <div className="small_head">
            <div className="user_info">
              <span style={{ fontWeight: "600" }}>
                {user[0]?.FirstName} {user[0]?.LastName}
              </span>
              <span>{user[0]?.FirstData}</span>
            </div>
            <IconButton
              className="small_closeprofile"
              onClick={() => dispatch(SMALL_PROFILE(false))}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className="smallprofile_second">
            <span>Orders</span>
            <span>Basket</span>
            <span>Gift Cards</span>
            <span style={{ marginBottom: "10px" }}>Contact Us</span>
          </div>
          <div className="smallprofile_second" style={{ marginTop: "5px" }}>
            <span>Coupons</span>
            <span>Saved Cards</span>
            <span>Saved Addresses</span>
            <span>Edit Profile</span>
          </div>
          <div className="smallprofile_third" style={{ marginTop: "5px" }}>
            <button onClick={() => dispatch(SET_USERLOGOUT())}>Log Out</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SmallProfile;
