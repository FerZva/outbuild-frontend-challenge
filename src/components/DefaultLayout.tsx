import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const DefaultLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-container_header">
        <h1 className="dashboard-container_header_title">Dashboard</h1>
        <button
          className="dashboard-container_header_logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <Outlet />
    </div>
  );
};

export default DefaultLayout;
