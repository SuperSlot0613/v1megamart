import React from "react";
import "../CSS/SmallBasket.css";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { SMALL_BASKET } from "../../features/detailSlice";

function SmallBasket() {
  const dispatch = useDispatch();

  return (
    <div className="smallbasket" onMouseLeave={()=>dispatch(SMALL_BASKET(false))}>
      <div className="smallB_container">
        <div className="small_head">
          <h5>item(s) added to bag</h5>
          <IconButton
            className="small_close"
            onClick={() => dispatch(SMALL_BASKET(false))}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <div className="small_product">
          <div className="small_image">
            <img src="https://assets.ajio.com/medias/sys_master/root/20210814/V1Nz/6116d0a67cdb8cb824f787af/netplay_blue_turtle-neck_sweater_with_raglan_sleeves.jpg" />
          </div>
          <div className="smallp_text">
            <h5>Rs.799</h5>
            <p>This is The product hahjffsjjkjdffj</p>
            <p style={{ fontSize: "14px" }}>
              QTY <span>1</span>
            </p>
            <p style={{ fontSize: "14px" }}>
              Size <span>7</span>
            </p>
          </div>
        </div>
        <div
          className="small_subtotal"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <h5>
            Total{" "}
            <span style={{ fontSize: "20px", fontWeight: "600" }}>
              Rs.799.00
            </span>
          </h5>
        </div>
        <div
          className="small_buybtn"
          style={{
            marginTop: "10px",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          <Button className="small_button">Procced To Buy</Button>
        </div>
        <div className="small_last">
          <p>Free shipping & Return| 100% Handpicked| Assured Quality</p>
        </div>
      </div>
    </div>
  );
}

export default SmallBasket;
