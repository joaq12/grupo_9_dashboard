import React from "react";
import Producto from "./Producto";

function Listado({products}) {
 
  return (
    <div>
      <section id="prodListCont">
        <p id="prodListTitle">Listado de Productos</p>
        {products.map( ({id, name, photo2, description}) => {
          return <Producto key={id} name={name} img={photo2} description={description}/>
        })}
      </section>
    </div>
  );
}
export default Listado;
