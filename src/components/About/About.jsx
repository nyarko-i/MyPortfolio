import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import about_profile from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hi there! I am Isaac Nyarko, a passionate web developer dedicated to crafting exceptional digital experiences. </p>
            <p>With expertise in front-end and back-end technologies, I love transforming ideas into beautiful, functional websites.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
