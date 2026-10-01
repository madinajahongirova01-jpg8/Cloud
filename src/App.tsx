import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const ForgotPassword = lazy(() => import("./Pages/ForgotPassword"));
const Wishlist = lazy(() => import("./Pages/Wishlist"));
const Cart = lazy(() => import("./Pages/Cart"));
const Account = lazy(() => import("./Pages/Account"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
         element: <Home /> 
        },
      { path: "about", 
        element: <About />
       },
      { path: "contact",
         element: <Contact /> 
        },
      { path: "login", 
        element: <Login /> 
      },
      { path: "register", 
        element: <Register /> 
      },
      { path: "forgot-password", 
        element: <ForgotPassword /> 
      },
      { path: "wishlist", 
        element: <Wishlist /> 
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "cart", 
            element: <Cart /> 
          },
          { path: "account",
             element: <Account /> 
            },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;