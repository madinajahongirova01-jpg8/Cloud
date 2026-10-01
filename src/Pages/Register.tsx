import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearAuthError, loginUser, registerUser } from "../app/authSlice";
import FormInput from "../components/FormInput";

const Register = () => {
  const [form, setForm] = useState({
    userName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [localError, setLocalError] = useState("");
  const { loading, error } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLocalError("");

    if (form.password !== form.confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    const result = await dispatch(registerUser(form));
    if (registerUser.fulfilled.match(result)) {
      const login = await dispatch(loginUser({ userName: form.userName, password: form.password }));
      if (loginUser.fulfilled.match(login)) navigate(from, { replace: true });
      else navigate("/login", { state: { from } });
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-medium tracking-wide">Create an account</h1>
      <p className="mt-4 text-base">Enter your details below</p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
        <FormInput label="Username" name="userName" value={form.userName} onChange={handleChange} required />
        <FormInput label="Phone number" name="phoneNumber" type="tel" value={form.phoneNumber} onChange={handleChange} required />
        <FormInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
        <FormInput label="Password" name="password" type="password" value={form.password} onChange={handleChange} required />
        <FormInput label="Confirm password" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} required />

        {(localError || error) && <p className="text-sm text-red-500">{localError || error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#DB4444] text-white py-4 rounded hover:bg-red-600 transition-colors disabled:opacity-60"
        >
          {loading ? "Loading..." : "Create Account"}
        </button>
      </form>

      <p className="mt-8 text-center text-gray-600">
        Already have account?
        <Link
          to="/login"
          state={{ from }}
          className="ml-3 text-black font-medium border-b border-gray-500"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Register;