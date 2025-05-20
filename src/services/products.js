const URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  const response = await fetch(URL);
  const products = await response.json();

  return products?.map((product) => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image: product.image,
  }));
}
