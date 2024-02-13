import React from "react";

const Profile = () => {
    return (
        <div className="home">
            <div className="card home-card">
                <h5>Mary</h5>
                <div className="card-image"> 
                <img src="https://images.unsplash.com/photo-1542451542907-6cf80ff362d6?q=80&w=1221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div className="card-content">
                <i class="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>Amazing post</p>
                    <input type="text" placeholder="add a comment"/><br/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Mary</h5>
                <div className="card-image"> 
                <img src="https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div className="card-content">
                <i class="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>Amazing post</p>
                    <input type="text" placeholder="add a comment"/><br/>
                </div>
            </div>
            <div className="card home-card">
                <h5>Mary</h5>
                <div className="card-image"> 
                <img src="https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div className="card-content">
                <i class="material-icons" style={{color:"red"}}>favorite</i>
                    <h6>title</h6>
                    <p>Amazing post</p>
                    <input type="text" placeholder="add a comment"/><br/>
                </div>
            </div>
        </div>
    );
  }
export default Profile