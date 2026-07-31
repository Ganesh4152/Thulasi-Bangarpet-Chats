import React from "react";

function DashboardCards() {
  const cards = [
    { title: "Categories", value: 0 },
    { title: "Food Items", value: 0 },
    { title: "Orders", value: 0 },
    { title: "Customers", value: 0 },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "20px",
        marginBottom: "30px",
      }}
    >
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            padding: "25px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,.2)",
            textAlign: "center",
          }}
        >
          <h3>{card.title}</h3>
          <h1>{card.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
