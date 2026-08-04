import React from "react";

function FoodTable({ foods, deleteFood, setEditingFood }) {
  return (
    <div>
      <h2>Food Items</h2>

      <table
        border="1"
        width="100%"
        cellPadding="10"
        style={{ background: "white" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Available</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{food.id}</td>
              <td>{food.name}</td>
              <td>₹{food.price}</td>
              <td>
                {food.available ? "✅" : "❌"}
              </td>

              <td>
<button
className="btn btn-warning me-2"
onClick={() => setEditingFood(food)}
>
Edit
</button>


                <button
                  onClick={() => deleteFood(food.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default FoodTable;
