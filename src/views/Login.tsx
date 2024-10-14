import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordType = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (value: string) => {
    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateEmail(email);
    validatePassword(password);

    if (!emailError && !passwordError && email && password) {
      const isSuccess = login(email, password);
      if (isSuccess) {
        navigate("/dashboard");
      }
    } else {
      console.log("Form contains errors.");
    }
  };

  return (
    <form
      className="guest-layout-page_container_form-content_form-container"
      onSubmit={handleSubmit}
    >
      <div className="guest-layout-page_container_form-content_form-container_email-container">
        <p className="guest-layout-page_container_form-content_form-container_email-container_p">
          <strong>E-Mail Address</strong>
        </p>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          className="guest-layout-page_container_form-content_form-container_email-container_input"
        />
        {emailError && (
          <label
            htmlFor="email"
            className="guest-layout-page_container_form-content_form-container_email-container_label"
          >
            {emailError}
          </label>
        )}
      </div>

      <div>
        <p className="guest-layout-page_container_form-content_form-container_email-container_p">
          <strong>Password</strong>
        </p>
        <div className="guest-layout-page_container_form-content_form-container_password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
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
        {passwordError && (
          <label className="guest-layout-page_container_form-content_form-container_password-container_label">
            {passwordError}
          </label>
        )}
      </div>

      <div className="guest-layout-page_container_form-content_form-container_button-container">
        <button
          type="submit"
          className="guest-layout-page_container_form-content_form-container_button-container_button"
        >
          <strong>Sign In</strong>
        </button>
      </div>
    </form>
  );
};

export default Login;
