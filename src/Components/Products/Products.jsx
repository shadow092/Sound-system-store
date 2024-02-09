import React from "react";
import Card from "../../items/Card/Card";

// import images from "../../assets";
import Dataitems from "../Data/Data";
import "./Products.css";

const Products = () => {
  const Data = Dataitems;
  return (
    <div id="products" className="app__products">
      {Data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          info={item.text}
          image1={item.img}
          image2={item.hover}
        />
      ))}
      {/* <Card
        title={"mini console"}
        price={"249"}
        info={"Ideal for everyday shortcuts. Adaptable to any workflow."}
        image1={images.smallConsole}
        image2={images.smallConsoleHover}
      />
      <Card
        title={"audio console"}
        price={"499"}
        info={"Ideal for music & audio. Adaptable to any workflow."}
        image1={images.audio}
        image2={images.audioHover}
      />
      <Card
        title={"PHOTO CONSOLE"}
        price={"499"}
        info={"Ideal for photo & video. Adaptable to any workflow."}
        image1={images.photo}
        image2={images.photoHover}
      />
      <Card
        title={"VIDEO CONSOLE"}
        price={"499"}
        info={"Ideal for Video & Film. Adaptable to any workflow."}
        image1={images.video}
        image2={images.videoHover}
      /> */}
    </div>
  );
};

export default Products;
