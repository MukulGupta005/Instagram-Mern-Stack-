import React from "react";

const Profile = () => {
    return (
      <>
        <header>
          <div className="profile-page">
            <div className="profile">
              <div className="profile-image">
                <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=152&h=152&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
              </div>
              <div className="profile-user-settings">
                <h1 className="profile-user-name">Mary</h1>
                <button className="btn profile-edit-btn">Edit Profile</button>
                <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
              </div>
              <div className="profile-stats">
                <ul>
                  <li><span className="profile-stat-count">164</span> posts</li>
                  <li><span className="profile-stat-count">188</span> followers</li>
                  <li><span className="profile-stat-count">206</span> following</li>
                </ul>
              </div>
              <div className="profile-bio">
                <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
              </div>
            </div>
            {/* End of profile section */}
          </div>
          {/* End of container */}
        </header>
  
        <main>
          <div className="container">
            <div className="gallery">
              {/* Add your gallery items here */}
            </div>
            {/* End of gallery */}
            <div className="loader"></div>
          </div>
          {/* End of container */}
        </main>
      </>
    );
  }
export default Profile