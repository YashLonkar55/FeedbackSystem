import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
// import SignInwithGoogle from "./signInWIthGoogle";
import "./login.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await signInWithEmailAndPassword(auth,email,password);
        console.log("User Registered Successfully");
        toast.success("User Registered Successfully!", {
            position:"top-center"
        });

    }catch(error){
        console.log(error.message);
        toast.success("error.message", {
            position:"bottom-center"
        });
    }
  };

  return (
    <div className="login-container">
    <form onSubmit={handleSubmit}>
      <h3 className="text-3xl pb-2 font-bold ">Login</h3>

      <div className="mb-3 ">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right ">
        New user <Link to='./register'>Register Here</Link>
      </p>
      {/* <SignInwithGoogle/> */}
    </form>
    </div>
  );
}

export default Login;