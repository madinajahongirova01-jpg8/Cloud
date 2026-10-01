import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import FormInput from "../components/FormInput";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-4xl font-medium tracking-wide">Forget Password</h1>
      <p className="mt-4 text-base">Enter your email below</p>

      {sent ? (
        <div className="mt-10 p-4 border border-gray-200 rounded text-gray-700">
          Online password reset is not available yet. Please contact us at
          <span className="font-medium"> exclusive@gmail.com</span>.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
          <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit" className="w-full bg-[#DB4444] text-white py-4 rounded hover:bg-red-600 transition-colors">
            Send
          </button>
        </form>
      )}

      <Link to="/login" className="block mt-8 text-center text-[#DB4444] hover:underline">
        Back to Log in
      </Link>
    </div>
  );
};

export default ForgotPassword;