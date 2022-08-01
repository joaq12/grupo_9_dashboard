import React from "react";

function LastProd({ lastProd }) {
  return (
    <article className="card_item lastProd">
      <p className="lastProd">Ultimo producto cargado</p>
      <p id="prodTitle">{lastProd.name}</p>
      <div id="lastProdMainCont">
        <div className="lastProdImg">
          <img
            src={`/images/${lastProd.photo1}`}
            alt="monitor"
            clas="images-description_image"
          />
          <div id="priceCont">
            <p id="prodPrice">$ {lastProd.price}</p>
          </div>
        </div>
        <div id="lasProdDataCont">
          <div id="descCont">
            <p id="ProdDescription">{lastProd.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
export default LastProd;
