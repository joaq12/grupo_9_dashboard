import React from "react";
import Producto from "./Producto";

function Listado({products}) {
 
  return (
    <div>
      <section id="prodListCont">
        <p id="prodListTitle">Listado de Productos</p>
        {products.slice(0, 9).map( ({id, name, photo2}) => {
          return <Producto key={id} name={name} img={photo2} />
        })}
      </section>
    </div>
  );
}
export default Listado;
