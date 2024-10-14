import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../services/useFetch";

const Dashboard = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { data } = useFetch("https://jsonplaceholder.typicode.com/comments");

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h1>Dashboard</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div>
        <ul></ul>
      </div>
    </div>
  );
};

export default Dashboard;
