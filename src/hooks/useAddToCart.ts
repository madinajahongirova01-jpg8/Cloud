import { useLocation, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectIsAuth } from "../app/authSlice";
import { addProductToCart } from "../app/cartSlice";

export function useAddToCart() {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return async (productId: number, quantity = 1, redirectAfterLogin?: string) => {
    if (!isAuth) {
      navigate("/login", { state: { from: redirectAfterLogin ?? location.pathname } });
      return false;
    }

    const result = await dispatch(addProductToCart({ productId, quantity }));
    return addProductToCart.fulfilled.match(result);
  };
}