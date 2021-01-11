import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container_com">
        <div className="home">
          <img src="assets/images/background.png" />
          <div className="home_letter">
            <h2>Learn DevOps by Example with great instructors!</h2>
            <p>It's a great place to learn everything about DevOps and SRE discipline. We have hundreds of lessons and videos!</p>
            <div>
              <button className="btn btn-small waves-effect waves-light hoverable orange accent-3">start learning</button>
              <button className="btn btn-small waves-effect waves-light hoverable  accent-3" style={{marginLeft:"20px"}}>view tutors</button>
            </div>
          </div>
        </div>
        <div className="featured">
          Featured
        </div>
        <div className="card_container">
          <div className="card">
            <div className="card_header">
              Terraform infrastructure as code
            </div>
 
            <div className="card_title">
              Terraform tutorial for beginers
            </div>
            <div className="card_detail">
              <img src="assets/images/user.png" style={{width:"50px", height:"50px" }} />
              <div className="user_info">
                <p>Anton Putra</p>
                <p>January 03, 2021</p>
              </div>
            </div>

          </div>
          <div className="card">
            <div className="card_header">
              Terraform infrastructure as code
            </div>
 
            <div className="card_title">
              Terraform tutorial for beginers
            </div>
            <div className="card_detail">
              <img src="assets/images/user.png" style={{width:"50px", height:"50px" }} />
              <div className="user_info">
                <p>Anton Putra</p>
                <p>January 03, 2021</p>
              </div>
            </div>

          </div>
          <div className="card">
            <div className="card_header">
              Terraform infrastructure as code
            </div>
 
            <div className="card_title">
              Terraform tutorial for beginers
            </div>
            <div className="card_detail">
              <img src="assets/images/user.png" style={{width:"50px", height:"50px" }} />
              <div className="user_info">
                <p>Anton Putra</p>
                <p>January 03, 2021</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
      
    );
  }
}

export default Landing;