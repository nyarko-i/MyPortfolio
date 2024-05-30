import './hero.css'
import image from '../../assets/image.svg'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image} alt="" />
      <h1><span>My name is  Isaac Nyarko</span>, a final year Telecommunication Engineering  <br />  student at the Kwame Nkrumah University of Science and Technology</h1>
      <p>A frontend developer</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero