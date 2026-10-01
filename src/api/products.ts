import { api } from "./axios";

export type Product = {
  id: number;
  productName: string;
  image: string;
  color: string;
  price: number;
  hasDiscount: boolean;
  discountPrice: number;
  quantity: number;
  productInMyCart: boolean;
  categoryId: number;
  categoryName: string;
};

export type ProductsParams = {
  ProductName?: string;
  MinPrice?: number;
  MaxPrice?: number;
  BrandId?: number;
  ColorId?: number;
  CategoryId?: number;
  SubcategoryId?: number;
  PageNumber?: number;
  PageSize?: number;
};

export type ProductsResponse = {
  products: Product[];
  colors: { id: number; colorName: string }[];
  brands: { id: number; brandName: string }[];
  minMaxPrice: { minPrice: number; maxPrice: number };
  totalPage: number;
  totalRecord: number;
};

export type Category = {
  id: number;
  categoryName: string;
  categoryImage: string;
  subCategories: { id: number; subCategoryName: string }[];
};

export async function fetchProducts(params: ProductsParams = {}): Promise<ProductsResponse> {
  const { data } = await api.get("/Product/get-products", { params });
  return { ...data.data, totalPage: data.totalPage, totalRecord: data.totalRecord };
}

export async function fetchCategories(): Promise<Category[]> {
  const { data } = await api.get("/Category/get-categories");
  return data.data;
}