import React from "react";

const CreatePost=()=>{
    return(
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
                <input type="text" placeholder="title"/> 
                <input type="text" placeholder="body"/> 
                <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
                <button className="btn #64b5f6 blue darken-1" style={{background:"#2596be"}}>Submit Post</button>
        </div>
    )
}

export default CreatePost