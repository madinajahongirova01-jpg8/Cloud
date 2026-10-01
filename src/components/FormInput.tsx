import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const FormInput = ({ label, type = "text", ...rest }: Props) => {
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="relative">
      <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">
        {label}
      </label>
      <input
        {...rest}
        type={isPassword && show ? "text" : type}
        className="w-full border border-gray-300 rounded px-4 py-3.5 pr-12 text-gray-800 outline-none focus:border-gray-500"
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      )}
    </div>
  );
};

export default FormInput;