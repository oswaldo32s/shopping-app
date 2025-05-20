import { useContext } from "react";
import { FiltersContext } from "../context/filters";
export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  function updateMinPrice(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: event.target.value,
    }));
  }

  function updateCategory(event) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  }

  return {
    filters,
    updateMinPrice,
    updateCategory,
  };
}
