import React, { useEffect, useState } from "react";
import ContentMiddle from "./ContentMiddle";
import Listado from "./Listado";
import Totales from "./Totales";

function Main() {
  const [products, setProducts] = useState({
    count: 0,
    countByCategory: [],
    products: [],
  });

  const [lastProductId, setLastProductId] = useState("")

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response)
        const { id } = response.products[response.count - 1]
        setLastProductId(id)
      });
  }, []);

  return (
    <>
      <Totales count={products.count} countByCategory={products.countByCategory.length}/>
      <ContentMiddle
        countByCategory={products.countByCategory}
        lastProductId={lastProductId}
      />
      <Listado products={products.products} />
    </>
  );
}
export default Main;
