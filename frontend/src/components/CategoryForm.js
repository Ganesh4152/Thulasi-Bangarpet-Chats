import React, { useState } from "react";

function CategoryForm({ addCategory }) {

  const [name, setName] = useState("");

  const submit = (e) => {
    e.preventDefault();

    addCategory({
      name
    });

    setName("");
  };

  return (
    <form onSubmit={submit}>

      <h2>Add Category</h2>

      <input
        type="text"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button type="submit">
        Add Category
      </button>

    </form>
  );
}

export default CategoryForm;
