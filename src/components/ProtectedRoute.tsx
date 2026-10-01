import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../app/hooks";
import { selectIsAuth } from "../app/authSlice";

const ProtectedRoute = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;