import React, { useState } from "react";
import "../Pages/css/LoginPageMain.css";
import logo from "../Components/Assets/logo.png";
import loginp from "../Components/Assets/login.jpg";
import { Link } from "react-router-dom";

const LoginPageMain = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login function executed", formData);
    let responseData;
    await fetch("https://shopper-kl9l.onrender.com/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginpagemain mt-4">
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex flex-1 gap-2 combo">
            <img
              src={logo}
              alt=""
              className="object-cover"
              style={{ height: "30px", width: "30px" }}
            />
            <h2 className="xl:text-3xl font-extrabold">
              <span className="kind">Login Here</span>
            </h2>
          </div>
          <div className="mt-3 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button onClick={() => login()} className="login-btn">
                  Login
                </button>
                <Link to="/signup" className="signup-now">
                  <p>
                    Don't have an account? <span>sign up</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="login flex-1 text-center hidden lg:flex">
          <div className="xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <img src={loginp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPageMain;
