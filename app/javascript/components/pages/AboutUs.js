import React, { Component } from 'react'
import teamcodecrak from '../assets/teamcodecrak.gif'
import codeCrak from '../assets/codeCrak.gif'
import batCrak from '../assets/batCrak.jpeg'

class AboutUs extends Component {
  render() {
    return (
      <div>
        <img src={codeCrak} alt='codecrak' width="200px"/>
      
			<div class="row">
        <div class="column">
          <div class="card">
          <img src={batCrak} alt='codecrak' width="200px"/>
          <div class="container">
            <h4><b>Kelly Evans</b></h4>
            <p>I am a full-stack software developer, transitioning from a career in federal service in the intelligence/investigations sector. After six rewarding years in federal service, and taking time to be a stay-at-home mom, I am excited to bring my skills into the web development industry. My background in creating collaborative solutions to dynamic and challenging problem-sets has lent itself well to the critical thinking and strong communication skills required in a pair programming environment.</p>
          </div>
          </div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
        <div class="column">
          <div class="card">..</div>
        </div>
      </div>
      </div>
    )
  }
}
export default AboutUs