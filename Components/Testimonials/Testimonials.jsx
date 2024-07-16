import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";

import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBack} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide-item">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mason Green</h3>
                  <span>Hammersmith, England</span>
                </div>
              </div>
              <p>
                I started taking lessons with as I wanted to improve my game,
                specifically my swing, consistency and understanding of the
                technical side of golf. My first goals were to achieve a
                handicap, start playing Junior Opens & County Competitions, all
                I now do and more.
              </p>
            </div>
          </li>
          <li>
            <div className="slide-item">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Harriet Spencer</h3>
                  <span>Hammersmith, England</span>
                </div>
              </div>
              <p>
                I started taking lessons with as I wanted to improve my game,
                specifically my swing, consistency and understanding of the
                technical side of golf. My first goals were to achieve a
                handicap, start playing Junior Opens & County Competitions, all
                I now do and more.
              </p>
            </div>
          </li>
          <li>
            <div className="slide-item">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mary Joyce</h3>
                  <span>Hammersmith, England</span>
                </div>
              </div>
              <p>
                I started taking lessons with as I wanted to improve my game,
                specifically my swing, consistency and understanding of the
                technical side of golf. My first goals were to achieve a
                handicap, start playing Junior Opens & County Competitions, all
                I now do and more.
              </p>
            </div>
          </li>
          <li>
            <div className="slide-item">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Richard Rios</h3>
                  <span>Hammersmith, England</span>
                </div>
              </div>
              <p>
                I started taking lessons with as I wanted to improve my game,
                specifically my swing, consistency and understanding of the
                technical side of golf. My first goals were to achieve a
                handicap, start playing Junior Opens & County Competitions, all
                I now do and more.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
