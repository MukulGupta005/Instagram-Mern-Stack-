import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import M from 'materialize-css';

const Signup = () => {
  const navigate = useNavigate ()
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [formValid, setFormValid] = useState(false);
  const PostData =()=>{
    if (!/^[a-zA-Z ]{2,30}$/.test(name) || 
    !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password) || 
    !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email) || 
    !/^[a-zA-Z0-9_]{3,15}$/.test(username) || 
    name === "" || password === "" || email === "" || username === "") {
    M.toast( {html: 'Please fill out all fields correctly', classes: 'red'});
    return;
    }
    fetch("/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
        username
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes:"#c62828 red darken-3" });
        }
        else{
          M.toast({ html: data.message, classes:"green" });
          navigate('/login')
        }
      });
  }

  const handleInputChange = (event) => {
    const form = event.target.form;
    setFormValid(form.checkValidity());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    PostData();
  };


  return (
    <main>
      <div className="page">
        <div className="header">
          <h1 className="brand-logo">Instagram</h1>
          <p>Sign up to see photos and videos from your friends.</p>
          <button>
            <i className="fab fa-facebook-square"></i> Log in with Facebook
          </button>
          <div>
            <hr />
            <p>OR</p>
            <hr />
          </div>
        </div>
        <div className="container">
          <form
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          >
            <input
              type="text"
              placeholder="Mobile Number or Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <ul>
              <li>
                People who use our service may have{" "}
                <Link href="">uploaded your contact information to Instagram.</Link>{" "}
                Learn More{" "}
              </li>
            </ul>
            <ul>
              <li>
                By signing up, you agree to our{" "}
                <Link href="">Terms</Link>,{" "}
                <Link href="">Data Policy</Link>{" "}
                and{" "}
                <Link href="">Cookies Policy</Link>.{" "}
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              className="signup"
              disabled={!formValid}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div className="option">
        <p>Have an account? <Link href="">Log in</Link></p>
      </div>
      <div className="otherapps">
        <p>Get the app.</p>
        <button type="button"><i className="fab fa-apple"></i> App Store</button>
        <button type="button"><i className="fab fa-google-play"></i> Google Play</button>
      </div>
      <div className="footer">
        <ul>
          <li><Link href="">ABOUT</Link></li>
          <li><Link href="">HELP</Link></li>
          <li><Link href="">PRESS</Link></li>
          <li><Link href="">API</Link></li>
          <li><Link href="">JOBS</Link></li>
          <li><Link href="">PRIVACY</Link></li>
          <li><Link href="">TERMS</Link></li>
          <li><Link href="">LOCATIONS</Link></li>
          <li><Link href="">TOP ACCOUNTS</Link></li>
          <li><Link href="">HASHTAGS</Link></li>
          <li><Link href="">LANGUAGE</Link></li>
        </ul>
        <p>© 2020 INSTAGRAM</p>
      </div>
    </main>
  );
};

export default Signup;