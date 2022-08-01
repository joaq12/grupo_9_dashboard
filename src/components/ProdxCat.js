import React from "react";

function ProdxCat({valor, category}) {
  return (
    <article className="card_item" id="catg_prodCont">
      <div id="CatgNameRow">
        <i className="fas fa-tag"></i>
        <h6>{category}</h6>
      </div>
      <p id="prodByCatg">{valor} PRODUCTOS EN LA CATEGORIA</p>
    </article>
  );
}
export default ProdxCat;
