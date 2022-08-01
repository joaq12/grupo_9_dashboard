import React, { useState, useEffect } from "react";
import LastProd from "./LastProd";
import ProdxCat from "./ProdxCat";

function ContentMiddle() {
  const [products, setProducts] = useState({
    count: 0,
    countByCategory: [],
    products: [],
  });

  const [lastProd, setLastProd] = useState({
    data: {},
  });

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((response) => {
        setProducts(response);
        const { id } = response.products[response.count - 1];

        fetch(`/api/products/${id}`)
          .then((res) => res.json())
          .then((response) => setLastProd(response));
      });
  }, []);

  return (
    <div>
      <section className="dashboard-main-section">
        <section className="dashboard-main-prod_container">
          <div className="dashboard-prod_container-cards">
            <article className="card_item" id="catgMainCont">
              <p className="catgTitleCont">Productos por Categorias</p>
              {products.countByCategory.map((cat, i) => {
                const category = Object.keys(cat);
                return (
                  <ProdxCat key={i} category={category} valor={cat[category]} />
                );
              })}
            </article>
            <LastProd lastProd={lastProd.data} />
          </div>
        </section>
      </section>
    </div>
  );
}
export default ContentMiddle;
