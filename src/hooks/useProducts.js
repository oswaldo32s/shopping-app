import { getProducts } from "../services/products";
import { useFilters } from "./useFilters";
import { useState, useEffect, useMemo } from "react";

export function useProducts() {
  const { filters } = useFilters();
  const [products, setProducts] = useState([]);

  const filteredProducts = useMemo(() => {
    return filters.minPrice
      ? products.filter((product) => {
          return (
            product.price <= filters.minPrice &&
            (filters.category === "all" ||
              product.category === filters.category)
          );
        })
      : products;
  }, [products, filters]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return {
    filteredProducts,
  };
}
