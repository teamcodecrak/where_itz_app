import React, { Component } from 'react'

 class Acknowledgment extends Component {
    render() {
        return (
            <div class="container mt-3">
                <div class="card">
                    <div style={{fontSize: "35px"}}class="card-header">Thank you to the following resources for helping make this app</div>
                        <div class="card-body">
                        <dl>
                            <dt style={{fontFamily:"sans-serif", fontSize: "25px"}}>Websites</dt>
                            <br/>
                                <dd>
                                    - <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
                                </dd>
                                <dd>
                                    - <a href="https://www.digitalocean.com/" target="_blank">Digital Ocean</a>
                                </dd>
                                <dd>
                                    - <a href="https://dev.to/kcarrel/major-key-alert-hide-your-api-keys-l4c/" target="_blank">Dev.to</a>
                                </dd>
                                <dd>
                                    - <a href="https://jefferson-cuartas.medium.com/rails-backend-how-to-fetch-data-from-a-third-party-api-via-restclient-c6968e70d6f5/" target="_blank">Medium</a>
                                </dd>
                                <dd>
                                    - <a href="https://guides.rubyonrails.org/" target="_blank">Ruby on Rails</a>
                                </dd>
                                <dd>
                                    - <a href="https://api.watchmode.com/" target="_blank">Watch Mode</a>
                                </dd>
                            <br/>
                            <dt style={{fontSize: "25px"}}>Mentors</dt>
                            <br/>
                                <dd>- Austin Walker</dd>
                                <dd>- Sarah Proctor</dd>
                                <dd>- Eddie Gomez</dd>
                                <dd>- Erik Guzman</dd>
                                <dd>- CodeCRAK Team</dd>
                        </dl>
                        </div>
                    <div class="card-footer">Thank You! -Team CodeCRAK</div>
                </div>
            </div>
        )
    }
}
export default Acknowledgment 