import { Spin } from "antd";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";

export default function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <Spin fullscreen />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
