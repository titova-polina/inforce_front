import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../API";
import { StyledList, StyledProductsWrapper } from "./styled";

export const ProductList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAllProducts();
      setData(response.data?.products || []);
    };
    fetchData();
  }, []);

  return (
    <>
      <StyledProductsWrapper>
        <StyledList>
          {data.map((product, i) => {
            const { name, imageUrl, count, width, height, weight } = product;
            return (
              <li key={i}>
                <h3>{name}</h3>
                <img src={imageUrl} alt={name} />
                <p>{count}</p>
                <p>{width}</p>
                <p>{height}</p>
                <p>{weight}</p>
              </li>
            );
          })}
        </StyledList>
      </StyledProductsWrapper>
    </>
  );
};
