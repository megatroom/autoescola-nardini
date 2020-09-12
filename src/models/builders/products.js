import faker from "faker";

import CarPlaceholder from "stories/assets/card-placeholder.jpg";
import products from "./fixtures/products.json";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i += 1) {
    result.push({
      ...products[i],
      image: CarPlaceholder,
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1)[0];
