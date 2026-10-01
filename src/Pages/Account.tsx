import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { logout } from "../app/authSlice";

const Account = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <p className="text-xl">Welcome, <span className="text-[#DB4444]">{user?.userName}</span></p>
      <button onClick={handleLogout} className="mt-6 border border-[#DB4444] text-[#DB4444] px-8 py-3 rounded">
        Logout
      </button>
    </div>
  );
};

export default Account;