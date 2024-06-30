import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./stylesheets/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userReg, setReg] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async () => {
    setLoading(true);
    try {
      if (!userReg || !password) {
        throw new Error("Please fill in all the fields");
      }

      // Regular expression to match the specified format
      const regNoRegex =
        /^(21BCE|21BAI|20BCE|20BAI|22BCE|22BAI|21BEC|22BEC|)\d{5}$/;

      if (!regNoRegex.test(userReg)) {
        throw new Error("Invalid registration number format.");
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/landing");

        // Save data to localStorage
        localStorage.setItem("userReg", userReg);
        // Note: It's not secure to save passwords in localStorage in a real-world application
        // This is just for demonstration purposes. In real apps, use secure methods like tokens or sessions.
        localStorage.setItem("userPassword", password);
      }, 1000);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login-form">
          <h2 className="login-heading">LOGIN</h2>
          <input
            type="text"
            placeholder="Enter Your Registration Number"
            value={userReg}
            onChange={(e) => setReg(e.target.value)}
            className="login-input"
          />
          <div className="password-input-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button
              onClick={togglePasswordVisibility}
              className="password-toggle-btn"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            onClick={handleLogin}
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </button>
          <p className="register-link"></p>
        </div>
      </div>
    </section>
  );
};

export default Login;
