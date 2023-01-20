import React from "react";
import FooterIcon from "../../assets/iconcomponents/icons/FooterIcon";

const Footer = () => {
  return (
    <div className="bg-[#4A4A4A]">
      <div className="contact">
        <div className="wrapper">
          <span>Subscribe to Our Newsletter</span>
          <div className="mail">
            <input type="text" placeholder="Enter your email address" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <div className="flex gap-13">
        <div className="items">
          <div className="logo">
            <span className="logo">LOGO</span>
            <span>Porker Hut</span>
          </div>
          <span>
            An Agro-Commerce E-Commerce platform where you can put your products
            and get customers from you at no extra cost
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1>Company</h1>
          <span>Affiliate</span>
          <span>About</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
        <div className="items">
          <h1>Products</h1>
          <span>Porks</span>
          <span>Animal Feeds</span>
          <span>Livestocks</span>
          <span>Agro Services</span>
        </div>
        <div className="items">
          <h1>Social Media</h1>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span>Legal Notice</span>
          <span>Privacy Policy </span>
          <span>Terms & Conditions</span>
        </div>
        <div className="right">
          <span className="copyright"></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
