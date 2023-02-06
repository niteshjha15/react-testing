import React, { useEffect, useState } from "react";

function Customers() {
  const [customer, setCustomer] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        let items = json?.map((li) => {
          return { name: li?.name };
        });
        setCustomer(items);
      });
  }, []);
  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customer?.map((li) => (
          <li key={li?.name}>{li?.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
