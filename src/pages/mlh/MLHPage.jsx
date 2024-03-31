import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./mlhpage.css"; // Import your CSS file

const MLHPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="middlePart flex flex-col justify-center items-center">
        <div className="mlhLoginForm">
          <h2 className="mlhLoginHeader" style={{ background: "none" }}>
            MLH Login!
          </h2>
          <label className="mlhLabel" style={{ background: "none" }}>
            Name:
          </label>
          <input type="text" className="mlhInput" />
          <label className="mlhLabel" style={{ background: "none" }}>
            Password:
          </label>
          <div className="mlhPasswordInput" style={{ background: "none" }}>
            <input
              type={showPassword ? "text" : "password"}
              className="mlhInput"
            />
            <span
              className="mlhPasswordToggle"
              style={{ background: "none" }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button className="mlhButton">Login!</button>
        </div>
      </div>
    </>
  );
};

export default MLHPage;
