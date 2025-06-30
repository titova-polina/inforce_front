import axios from "axios";

const API = axios.create({
  baseURL: `http://localhost:3002/api`,
  headers: { "content-type": "application/json", accept: "application/json" },
});

export const fetchAllProducts = async () => {
  const response = await API.get("/product");
  return response;
};

export const addProduct = async ({
  name,
  imageUrl,
  count,
  width,
  height,
  weight,
}) => {
  const response = await API.post("/product", {
    name,
    imageUrl,
    count,
    width,
    height,
    weight,
  });
  return response;
};
