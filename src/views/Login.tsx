import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordType = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="guest-layout-page_container_form-content_form-container">
      <div className="guest-layout-page_container_form-content_form-container_email-container">
        <p className="guest-layout-page_container_form-content_form-container_email-container_p">
          <strong>E-Mail Address</strong>
        </p>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          className="guest-layout-page_container_form-content_form-container_email-container_input"
        />
        <label
          htmlFor="email"
          className="guest-layout-page_container_form-content_form-container_email-container_label"
        >
          Please enter a valid email
        </label>
      </div>
      <div>
        <p className="guest-layout-page_container_form-content_form-container_email-container_p">
          <strong>Password</strong>
        </p>
        <div className="guest-layout-page_container_form-content_form-container_password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="guest-layout-page_container_form-content_form-container_password-container_input"
          />
          <div className="guest-layout-page_container_form-content_form-container_password-container_icon">
            {!showPassword ? (
              <AiFillEye onClick={handlePasswordType} />
            ) : (
              <AiFillEyeInvisible onClick={handlePasswordType} />
            )}
          </div>
        </div>
      </div>
      <div className="guest-layout-page_container_form-content_form-container_button-container">
        <button className="guest-layout-page_container_form-content_form-container_button-container_button">
          <strong>Sign In</strong>
        </button>
      </div>
    </form>
  );
};

export default Login;
