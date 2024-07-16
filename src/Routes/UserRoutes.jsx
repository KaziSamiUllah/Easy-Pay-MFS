import useUser from "../Hooks/useUser";
import { useLocation, Navigate } from "react-router-dom";

const UserRoutes = ({ children }) => {
  const { user, savedUser, isPending } = useUser();
  const location = useLocation();

  if (isPending) {
    return <div className="flex w-full h-screen justify-center items-center">
      <span className="loading loading-ring loading-lg"></span>
    </div>;
  }

  else if (savedUser?.role === "user") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default UserRoutes;