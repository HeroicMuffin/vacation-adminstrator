import React from "react";
import axios from "axios";
import myHook from "../../myHookers/customHook";
import "./index.css";

const registerUrl = "http://localhost:3200/register";

export default function Register(props) {
  const initState = { firstName: "", lastName: "", email: "", password: "" };
  const [data, handleChange] = myHook(initState);

  const handleRegister = async () => {
    const result = await axios.post(registerUrl, data);
    const { message, redirect } = result.data;
    alert(message);
    if (redirect) {
      props.history.push("/Login");
    }
  };

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          onChange={handleChange}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={handleRegister}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered? <a href="/Login">Sign in!</a>
      </p>
    </form>
  );
}
