import style from "./ProductFilters.module.css";
import { useFilters } from "../../../hooks/useFilters";

export function ProductFilters() {
  const { updateCategory, updateMinPrice, filters } = useFilters();

  return (
    <section className={style.section}>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          name="price"
          id="price"
          min={0}
          max={1000}
          onChange={updateMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select name="category" id="category" onChange={updateCategory}>
          <option value="all">all</option>
          <option value="men's clothing">men's clothing</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
    </section>
  );
}
