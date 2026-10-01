import { useEffect, useState } from "react";
import { fetchProducts, type ProductsParams, type ProductsResponse } from "../api/products";
import { getErrorMessage } from "../api/axios";

export function useProducts(params: ProductsParams = {}) {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const key = JSON.stringify(params);

  useEffect(() => {
    let active = true;
    setLoading(true);

    fetchProducts(JSON.parse(key))
      .then((res) => {
        if (active) {
          setData(res);
          setError("");
        }
      })
      .catch((e) => {
        if (active) setError(getErrorMessage(e));
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [key]);

  return { data, products: data?.products ?? [], loading, error };
}