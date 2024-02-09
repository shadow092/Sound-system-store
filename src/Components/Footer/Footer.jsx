import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-info">
        <h2>MONOGRAM</h2>
        <p>305 King St. W.</p>
        <p>Suite 502</p>
        <p>Kitchener, ON</p>
        <p>Canada</p>
      </div>

      <div class="app__footer-info">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/how-it-works/">How it Works</a>
          </li>
          <li>
            <a href="/shop/">Shop</a>
          </li>
          <li>
            <a href="/download/">Download</a>
          </li>
        </ul>
      </div>

      <div class="app__footer-info">
        <h2>help</h2>
        <ul>
          <li>
            <a href="/">FAQs</a>
          </li>
          <li>
            <a href="/how-it-works/">Support Center</a>
          </li>
          <li>
            <a href="/shop/">Shipping and Sales</a>
          </li>
        </ul>
      </div>

      <div class="app__footer-info">
        <h2>information</h2>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/how-it-works/">Work with us</a>
          </li>
          <li>
            <a href="/shop/">Privacy Policy</a>
          </li>
          <li>
            <a href="/download/">Terms of Use</a>
          </li>
          <li>
            <a href="/download/">Terms of Sale</a>
          </li>
          <li>
            <a href="/download/">Press Kit</a>
          </li>
        </ul>
      </div>

      <div id="email" className="app__footer-info">
        <h2>SUBSCRIBE TO MONOGRAM</h2>
        <p>
          Master productivity with Creative Console and get all the latest
          Monogram news.
        </p>

        <div className="app__footer-info_email">
          <input type="text" placeholder="Email Address" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
