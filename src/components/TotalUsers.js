import React from "react";

function TotalUsers({ totalUsers }) {
  return (
    <article className="card_item">
      <div>
        <i className="fas fa-users" id="usersIon"></i>
        <h6>TOTAL DE USUARIOS</h6>
      </div>
      <p className="userTot">{totalUsers}</p>
    </article>
  );
}
export default TotalUsers;
