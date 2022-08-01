import React from "react";


function TotalCat({totalCat}){
    return(
        <article className="card_item">
        <div>
          <i className="fas fa-tag"></i>
          <h6>TOTAL DE CATEGORIAS</h6>
        </div>
        <p className="catgTot">{totalCat}</p>
      </article>
    )
}
export default TotalCat;