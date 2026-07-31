import React, { useState } from "react";

function FoodForm({ addFood }) {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const submit = (e) => {
    e.preventDefault();

    addFood({
      name,
      price,
      available: true
    });

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={submit}>

      <h2>Add Food Item</h2>

      <input
        type="text"
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <br /><br />

      <button type="submit">
        Add Food
      </button>

    </form>
  );
}

export default FoodForm;
