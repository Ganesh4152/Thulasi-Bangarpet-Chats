import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import DashboardCards from "../components/DashboardCards";

import FoodForm from "../components/FoodForm";
import FoodTable from "../components/FoodTable";
import CategoryForm from "../components/CategoryForm";

function Admin() {

  const [foods, setFoods] = useState([]);
  const [categories, setCategories] = useState([]);

  const API = "http://localhost:8081/api";

  useEffect(() => {
    loadFoods();
    loadCategories();
  }, []);

  const loadFoods = async () => {
    const res = await axios.get(`${API}/menu`);
    setFoods(res.data);
  };

  const loadCategories = async () => {
    const res = await axios.get(`${API}/categories`);
    setCategories(res.data);
  };

  const addFood = async (food) => {
    await axios.post(`${API}/menu`, food);
    loadFoods();
  };

  const deleteFood = async (id) => {
    await axios.delete(`${API}/menu/${id}`);
    loadFoods();
  };

  const addCategory = async (category) => {
    await axios.post(`${API}/categories`, category);
    loadCategories();
  };

  return (
    <>
      <AdminNavbar />

      <div style={{ display: "flex" }}>

        <AdminSidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            background: "#f4f4f4",
          }}
        >

          <DashboardCards />

          <CategoryForm
            addCategory={addCategory}
          />

          <br />

          <FoodForm
            addFood={addFood}
          />

          <br />

          <FoodTable
            foods={foods}
            deleteFood={deleteFood}
          />

          <br />

          <h2>Categories</h2>

          <ul>
            {categories.map((cat) => (
              <li key={cat.id}>
                {cat.name}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </>
  );
}

export default Admin;
