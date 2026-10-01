import { useState } from "react";
import { Link } from "react-router";
import { Heart, Eye, Trash2, ShoppingCart, Star } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleWishlist, removeFromWishlist, type WishItem } from "../app/wishlistSlice";
import { imageUrl } from "../api/axios";
import { useAddToCart } from "../hooks/useAddToCart";

type Props = {
  product: WishItem;
  variant?: "default" | "wishlist";
  showRating?: boolean;
};

const ProductCard = ({ product, variant = "default", showRating = true }: Props) => {
  const dispatch = useAppDispatch();
  const addToCart = useAddToCart();
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const isLiked = useAppSelector((state) =>
    state.wishlist.items.some((i) => i.id === product.id)
  );

  const finalPrice = product.hasDiscount ? product.discountPrice : product.price;
  const discountPercent =
    product.hasDiscount && product.price > 0
      ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
      : 0;

  const handleLike = () => {
    dispatch(
      toggleWishlist({
        id: product.id,
        productName: product.productName,
        image: product.image,
        price: product.price,
        hasDiscount: product.hasDiscount,
        discountPrice: product.discountPrice,
      })
    );
  };

  const handleAddToCart = async () => {
    setStatus("loading");
    const ok = await addToCart(product.id);
    if (ok) {
      setStatus("done");
      setTimeout(() => setStatus("idle"), 1500);
    } else {
      setStatus("idle");
    }
  };

  const isWishlist = variant === "wishlist";

  return (
    <div className="group w-full">
      <div className="relative h-62.5 bg-[#F5F5F5] rounded overflow-hidden">
        <Link
          to={`/product/${product.id}`}
          className="absolute inset-0 flex items-center justify-center p-8 pb-12"
        >
          <img
            src={imageUrl(product.image)}
            alt={product.productName}
            className="max-h-full max-w-full object-contain"
          />
        </Link>

        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded">
            -{discountPercent}%
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {isWishlist ? (
            <button
              onClick={() => dispatch(removeFromWishlist(product.id))}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          ) : (
            <>
              <button
                onClick={handleLike}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <Heart
                  className={`w-4 h-4 ${isLiked ? "fill-[#DB4444] text-[#DB4444]" : ""}`}
                />
              </button>
              <Link
                to={`/product/${product.id}`}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200"
              >
                <Eye className="w-4 h-4" />
              </Link>
            </>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={status === "loading"}
          className={`absolute bottom-0 left-0 right-0 bg-black text-white py-2.5 text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
            isWishlist
              ? "opacity-100"
              : "opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          {isWishlist && <ShoppingCart className="w-4 h-4" />}
          {status === "loading" ? "Adding..." : status === "done" ? "Added ✓" : "Add To Cart"}
        </button>
      </div>

      <Link to={`/product/${product.id}`}>
        <h3 className="mt-4 font-medium text-black line-clamp-1 hover:text-[#DB4444]">
          {product.productName}
        </h3>
      </Link>

      <div className="mt-2 flex items-center gap-3">
        <span className="text-[#DB4444] font-medium">${finalPrice}</span>
        {product.hasDiscount && (
          <span className="text-gray-500 line-through">${product.price}</span>
        )}
      </div>

      {showRating && !isWishlist && (
        <div className="mt-2 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} className="w-4 h-4 fill-[#FFAD33] text-[#FFAD33]" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;