import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

const GuestLayout = () => {
  return (
    <div className="guest-layout-page">
      <div className="guest-layout-page_container">
        <div className="guest-layout-page_container_header-content">
          <div className="guest-layout-page_container_header-content_logo-container">
            <img
              className="guest-layout-page_container_header-content_logo-container_logo"
              src={Logo}
              alt=""
            />
          </div>
          <h1>Welcome back</h1>
          <p>Please enter your credentials to sign in</p>
        </div>
        <div className="guest-layout-page_container_form-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
