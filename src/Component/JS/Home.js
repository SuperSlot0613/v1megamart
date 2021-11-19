import React, { useEffect, useState } from "react";
import "../CSS/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProductCard from "./ProductCard";
import Carousel1 from "react-elastic-carousel";
import { db } from "../../Firebase";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import SmallBasket from "./SmallBasket";
import { selectsmallbasket } from "../../features/detailSlice";
import { useSelector } from "react-redux";

function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 800, itemsToShow: 4 },

    { width: 1000, itemsToShow: 5 },
  ];

  const [productItem, setproductItem] = useState([]);

  const [ScrollImage, setScrollImage] = useState([]);
  const [ScrollImage1, setScrollImage1] = useState([]);
  const [ScrollImage2, setScrollImage2] = useState([]);

  useEffect(() => {
    db.collection("ProductItem").onSnapshot((snapshot) => {
      setproductItem(
        snapshot.docs.map((doc) => ({
          // id: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("ScrollImage").onSnapshot((snapshot) => {
      setScrollImage(
        snapshot.docs.map((doc) => ({
          // id: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("ScrollImage1").onSnapshot((snapshot) => {
      setScrollImage1(
        snapshot.docs.map((doc) => ({
          // id: doc.id,
          data: doc.data(),
        }))
      );
    });
    db.collection("ScrollImage2").onSnapshot((snapshot) => {
      setScrollImage2(
        snapshot.docs.map((doc) => ({
          // id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  // console.log(productItem);
  // // setMens(productItem[0]);
  // // console.log(mens);

  return (
    <div className="home">
      <div className="home_carousal">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          interval={3000}
        >
          {ScrollImage.map((each, index) => (
            <div className="carousal_div" key={index}>
              <img className="carousal_img" src={each.data.image} />
            </div>
          ))}
        </Carousel>
      </div>
      <div
        className="upscroll_main"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <div className="upscroll">
          <IconButton className="key_icon">
            <KeyboardArrowUpIcon className="keyup_board" />
          </IconButton>
        </div>
      </div>
      <div className="card_allproduct">
        <h1 className="cardtitle_text">The Best Product For Men</h1>
        <div className="card_mens">
          {/* <Carousel1 breakPoints={breakPoints}> */}
          {productItem.map((each, index) =>
            each.data.mens.map((item) => (
              <ProductCard image={item.image} description={item.description} />
            ))
          )}
          {/* </Carousel1> */}
        </div>
        <h1 className="cardtitle_text">The Best Product For Women</h1>
        <div className="card_womens">
          {/* <Carousel1 breakPoints={breakPoints}> */}
          {productItem.map((each, index) =>
            each.data.womens.map((item) => (
              <ProductCard image={item.image} description={item.description} />
            ))
          )}
          {/* </Carousel1> */}
        </div>
        <div className="home_carousal1">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            interval={3000}
          >
            {ScrollImage1.map((each, index) => (
              <div className="carousal_div" key={index}>
                <img className="carousal_img" src={each.data.image} />
              </div>
            ))}
          </Carousel>
        </div>
        <h1 className="cardtitle_text">The Best Product For Kids</h1>
        <div className="card_womens">
          {/* <Carousel1 breakPoints={breakPoints}> */}
          {productItem.map((each, index) =>
            each.data.kids.map((item) => (
              <ProductCard image={item.image} description={item.description} />
            ))
          )}
          {/* </Carousel1> */}
        </div>
        <h1 className="cardtitle_text">
          The Best Product For Traditional Wear
        </h1>
        <div className="card_womens">
          {/* <Carousel1 breakPoints={breakPoints}> */}
          {productItem.map((each, index) =>
            each.data.traditional.map((item) => (
              <ProductCard image={item.image} description={item.description} />
            ))
          )}
          {/* </Carousel1> */}
        </div>
        <div className="home_carousal1">
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            interval={3000}
          >
            {ScrollImage2.map((each, index) => (
              <div className="carousal_div" key={index}>
                <img className="carousal_img" src={each.data.image} />
              </div>
            ))}
          </Carousel>
        </div>
        <h1 className="cardtitle_text">The Best Product For Sports</h1>
        <div className="card_womens">
          {/* <Carousel1 breakPoints={breakPoints}> */}
          {productItem.map((each, index) =>
            each.data.sports.map((item) => (
              <ProductCard image={item.image} description={item.description} />
            ))
          )}
          {/* </Carousel1> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
