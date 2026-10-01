import { useEffect, useState, type FormEvent } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearAuthError, loginUser, selectIsAuth } from "../app/authSlice";
import FormInput from "../components/FormInput";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error } = useAppSelector((state) => state.auth);
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ userName, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate(from, { replace: true });
    }
  };

  if (isAuth) return <Navigate to="/" replace />;

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-medium tracking-wide">Log in to Exclusive</h1>
      <p className="mt-4 text-base">Enter your details below</p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        <FormInput
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Link to="/forgot-password" className="text-center text-[#DB4444] hover:underline">
          Forget Password?
        </Link>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#DB4444] text-white py-4 rounded hover:bg-red-600 transition-colors disabled:opacity-60"
        >
          {loading ? "Loading..." : "Log In"}
        </button>
      </form>

      <p className="mt-8 text-center text-gray-600">
        Don't have account?
        <Link
          to="/register"
          state={{ from }}
          className="ml-3 text-black font-medium border-b border-gray-500"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;