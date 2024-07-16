import React from "react";
import "./About.css";
import about_img from "../../assets/golf-teach.jpg";


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h3>Join Team Stardust Golfing Today</h3>

        <h2>We help the average golfer play their best golf, ever!</h2>

        <p>
          Practice with a purpose with effective step-by-step, online golf
          lessons covering every area of your game, including fitness and mental
          plans, so you can maximise your potential on and off the course.
          <br />
          You’ll complete a Game Assessment to help us personalise your
          coaching, so you know you’ll be working on areas of your game will
          have the biggest impact on performance.
        </p>
      </div>
      <div className="about-right">
        <img src={about_img} alt="" className="about-img" />
      </div>
    </div>
  );
};

export default About;
