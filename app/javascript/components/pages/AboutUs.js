import React, { Component } from 'react'
import teamcodecrak from '../assets/teamcodecrak.gif'
import crakCode from '../assets/crakCode.gif'
import kelCrak from '../assets/kelCrak.jpeg'
import antCrak from '../assets/antCrak.jpeg'
import bobCrak from '../assets/bobCrak.png'
import charCrak from '../assets/charCrak.jpeg'

class AboutUs extends Component {
  render() {
    return (
      <div>
        <img src={crakCode} alt='codecrak' className="image" />
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="container" style={{borderRadius:"6px"}}>
                <img src={kelCrak} alt='codecrak' width="100%" className="center"/>
                <h4 className="center"><b>Kelly Evans</b></h4>
                <p style={{fontFamily:"sans-serif"}}>I am a full-stack software developer, transitioning from a career in federal service in the intelligence/investigations sector. After six rewarding years in federal service, and taking time to be a stay-at-home mom, I am excited to bring my skills into the web development industry. My background in creating collaborative solutions to dynamic and challenging problem-sets has lent itself well to the critical thinking and strong communication skills required in a pair programming environment.</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="container" style={{borderRadius:"6px"}}>
                <img src={bobCrak} alt='codecrak' width="100%" className="center"/>
                <h4 className="center"><b>Robert Cook</b></h4>
                <p style={{fontFamily:"sans-serif"}}>Bobby is the self-proclaimed most human dude on the planet. After spending 20+ years hopping around three different industries, he finally found something that could occupy his attentions span; web development. He strives to combine his critical thinking and problem solving skills, collected as an engineer,.with the people and adaptation skills he learned from long stints in the restaurant and retail industries respectfully. Becoming a full-stack engineer has reinvigorated his desire to learn, teach, create, and admire. “The world is my percussion” - Bobby</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="container" style={{borderRadius:"6px"}}>
                <img src={antCrak} alt='codecrak' width="100%" className="center"/>
                <h4 className="center"><b>Anthony Castro</b></h4>
                <p style={{fontFamily:"sans-serif"}}>Hello World! I am a Logistics Coordinator/Driver Manager who finally took his dream into action in 2018 when I decided to start web Development with my first Javascript/HTML class! I Have been fascinated with computers since my beginning years in life and I am still looking to further my skills in web development while starting a great relationship with the tech community! I am now a full stack web-developer with 400+ hours of hands-on experience from a Bootcamp called Learn Academy!</p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="container" style={{borderRadius:"6px"}}>
                <img src={charCrak} alt='codecrak' width="100%" className="center"/>
                <h4 className="center"><b>Charlean Baxter</b></h4>
                <p style={{fontFamily:"sans-serif"}}>Charlean is my name, and sprinkling syntactical sugar is my game. My curiosity has lead me through various roles in nuclear engineering as well as allied health. That same eagerness to learn is fueling my quest to become a full stack web developer. This full stack engineer is dedicated to discovering, developing, and implementing creative solutions to complex web applications. Thanks to Learn Academy, I have a strong foundation to support the next milestone in my web developer career: internship.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AboutUs