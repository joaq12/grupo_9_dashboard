import React, { useEffect, useState } from "react";
import TotalProd from "./TotalProd";
import TotalCat from "./TotalCat";
import TotalUsers from "./TotalUsers";

function Totales({ countByCategory, count }) {
  const [users, setUsers] = useState({
    count: 0,
    users: [],
  });

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((response) => setUsers(response));
  }, []);

  return (
    <div>
      <section className="dashboard-main-section">
        <section className="dashboard-main-cards_container">
          <div className="dashboard-cards_container-cards">
            <TotalProd count={count} />
            <TotalCat totalCat={countByCategory} />
            <TotalUsers totalUsers={users.count} />
          </div>
        </section>
      </section>
    </div>
  );
}

export default Totales;
