import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.scss";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
