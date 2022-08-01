import React from "react";

function TotalProd({ count }) {
  return (
    <article className="card_item">
      <div>
        <i className="fas fa-shopping-bag"></i>
        <h6>TOTAL DE PRODUCTOS</h6>
      </div>
      <p className="prodTot">{count}</p>
    </article>
  );
}
export default TotalProd;
