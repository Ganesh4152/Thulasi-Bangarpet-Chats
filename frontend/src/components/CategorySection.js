import React from "react";

const categories = [
  "Chats",
  "Dosa",
  "Meals",
  "Beverages",
  "Desserts"
];

function CategorySection() {
  return (
    <div className="categories">
      <h2>Featured Categories</h2>

      <div className="category-grid">
        {categories.map((category) => (
          <div className="category-card" key={category}>
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySection;
