import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
