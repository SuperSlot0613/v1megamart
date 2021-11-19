import React from "react";
import "../CSS/Navbar.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import logo from "../../assets/image/logo.png";
import { useDispatch } from "react-redux";
import {
  SMALL_BASKET,
  SMALL_LOGIN,
  SMALL_PROFILE,
} from "../../features/detailSlice";
import $ from "jquery";

function Navbar() {
  const dispatch = useDispatch();

  const xwidth = window.screen.width;

  return (
    <div className="navbar_body">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand logo_img"
            href="#"
            onClick={() => {
              if (xwidth <= 990) {
                $(".navbar-collapse").hide(500, "linear");
              }
            }}
          >
            <img
              src={logo}
              style={{ width: "13vw", height: "5vh", objectFit: "cover" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => $(".navbar-collapse").show("slide")}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar_main"
            id="navbarNavDropdown"
            onClick={() => {
              if (xwidth <= 990) {
                $(".navbar-collapse").toggle(500, "linear");
              }
            }}
          >
            <ul className="navbar-nav">
              <li className="nav-item nav_items">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item nav_items">
                <a className="nav-link" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item nav_items">
                <a className="nav-link" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item nav_items">
                <a className="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li className="nav-item dropdown nav_items">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Jeans
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Shadi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Discount Items
                    </a>
                  </li>
                </ul>
              </li>
              <form className="d-flex form_tag">
                <input
                  className="form-control me-2 search_input"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-success search_btn"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div className="basket_icons">
                <li
                  className="nav-item nav_icons"
                  onMouseEnter={() => {
                    if (xwidth <= 990) {
                      $(".navbar-collapse").toggle(500, "linear");
                    }
                    dispatch(SMALL_PROFILE(true));
                  }}
                >
                  <PersonIcon />
                  <span>saurabh@gmail.com</span>
                </li>
                <li
                  className="nav-item nav_icons"
                  onMouseEnter={() => {
                    if (xwidth <= 990) {
                      $(".navbar-collapse").toggle(500, "linear");
                    }
                    dispatch(SMALL_BASKET(true));
                  }}
                >
                  {/* <span>5</span> */}
                  <ShoppingBasketIcon />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
