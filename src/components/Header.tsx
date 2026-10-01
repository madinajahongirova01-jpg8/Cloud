import { Heart, ShoppingCart, Search, User } from "lucide-react";
import { Link, NavLink } from "react-router";
import { useAppSelector } from "../app/hooks";
import { selectIsAuth } from "../app/authSlice";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-black border-b-2 border-black pb-0.5 font-semibold"
    : "text-black hover:text-gray-600 transition-colors";

const Badge = ({ count }: { count: number }) =>
  count > 0 ? (
    <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 bg-[#DB4444] text-white text-[10px] rounded-full flex items-center justify-center">
      {count}
    </span>
  ) : null;

const Header = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const wishlistCount = useAppSelector((state) => state.wishlist.items.length);
  const cartCount = useAppSelector((state) => state.cart.items.length);

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">

        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <svg
              className="w-8 h-8 text-amber-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              <path d="M9 9h6" stroke="#1D4ED8" strokeWidth="2" />
              <path d="M8 12h8" stroke="#1D4ED8" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tight text-black font-sans">
            fastcart
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10 text-base font-medium">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          {!isAuth && (
            <NavLink to="/register" className={linkClass}>
              Sign Up
            </NavLink>
          )}
        </nav>

        <div className="flex items-center space-x-6">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-56 lg:w-72 bg-gray-100 text-gray-800 text-sm py-2.5 pl-4 pr-10 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400"
            />
            <button className="absolute right-3 text-gray-700 hover:text-black">
              <Search className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center space-x-4 text-black">
            <Link to="/wishlist" className="p-1 relative hover:opacity-75 transition-opacity">
              <Heart className="w-6 h-6 stroke-[1.75]" />
              <Badge count={wishlistCount} />
            </Link>

            <Link to="/cart" className="p-1 relative hover:opacity-75 transition-opacity">
              <ShoppingCart className="w-6 h-6 stroke-[1.75]" />
              <Badge count={cartCount} />
            </Link>

            {isAuth && (
              <Link to="/account" className="p-1 hover:opacity-75 transition-opacity">
                <User className="w-6 h-6 stroke-[1.75]" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;