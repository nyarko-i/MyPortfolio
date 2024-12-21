import "./hero.css";
import image from "../../assets/image.svg";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={image} alt="" />
      <h1>
        <span>My name is Isaac Nyarko</span>, a Telecommunication Engineering
        Graduate <br />
      </h1>
      <p>A Software developer</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
