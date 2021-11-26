import React, { Component } from 'react'

 class Acknowledgment extends Component {
    render() {
        return (
            <div class="container mt-3">
            <div class="card">
              <div class="card-header">Thank you to the following resources for helping make this app</div>
                <div class="card-body">
                <dl>
                    <dt style={{fontSize: "25px"}}>Websites</dt>
                    <br/>
                        <dd>- https://www.w3schools.com</dd>
                        <dd>- https://www.digitalocean.com</dd>
                        <dd>- https://dev.to/kcarrel/major-key-alert-hide-your-api-keys-l4c</dd>
                        <dd>- https://jefferson-cuartas.medium.com/rails-backend-how-to-fetch-data-from-a-third-party-api-via-restclient-c6968e70d6f5</dd>
                        <dd>- https://guides.rubyonrails.org</dd>
                        <dd>- https://api.watchmode.com/</dd>
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