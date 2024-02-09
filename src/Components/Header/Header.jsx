import React from "react";

import "./Header.css";
import mainImage from "../../assets/mainimg.jpg";

const Header = () => {
  const scrollToProduct = () => {
    const productSection = document.getElementById("products");

    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const style = {
    backgroundImage: `url(${mainImage})`,
  };

  return (
    <div style={style} className="app__header">
      <div className="app__header-cover">
        <h1>
          A CONSOLE FOR <br /> EVERY WORKFLOW
        </h1>
        <p>Discover the perfect console for yours.</p>
        <svg
          class="downward-indicator-module--downIcon--1e586 animations-module--slideUp--66da7 animations-module--slideUpStart--f5cb8"
          width="1.5em"
          height="1.5em"
          fill="currentColor"
          viewBox="0 0 16 16"
          onClick={scrollToProduct}
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Header;
