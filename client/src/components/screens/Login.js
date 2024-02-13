import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import M from 'materialize-css';

const Login = () => {
  const navigate = useNavigate ()
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formValid, setFormValid] = useState(false);
  const PostData =()=>{
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email) || 
    password === "") {
    M.toast( {html: 'Please fill out all fields correctly', classes: 'red'});
    return;
    }
    fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          M.toast({ html: data.error, classes:"#c62828 red darken-3" });
        }
        else{
          M.toast({ html: "Signed In Successfully", classes:"green" });
          navigate('/');
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
            <p>Log in to see photos and videos from your friends.</p>
            <button><i className="fab fa-facebook-square"></i> Log in with Facebook</button>
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
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
              <button
              onClick={handleSubmit}
              className="login"
              disabled={!formValid}>Log in</button>
            </form>
            <p>Forgotten password? <Link href="">Get help logging in</Link></p>
            <ul>
              <li>By logging in, you agree to our</li>
              <li><Link href="">Terms</Link></li>
              <li><Link href="">Data Policy</Link></li>
              <li>and</li>
              <li><Link href="">Cookies Policy</Link>.</li>
            </ul>
          </div>
        </div>
        <div className="option">
          <p>Don't have an account? <Link href="">Sign up</Link></p>
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
          <p>© 2020 PICTUREGRAM</p>
        </div>
      </main>
    )
  }
export default Login