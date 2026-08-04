import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import DashboardCards from "../components/DashboardCards";

import FoodForm from "../components/FoodForm";
import FoodTable from "../components/FoodTable";
import CategoryForm from "../components/CategoryForm";

const API = "http://13.207.126.116:8081/api";

function Admin() {

  const [foods, setFoods] = useState([]);
  const [editingFood, setEditingFood] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadFoods();
    loadCategories();
  }, []);

  const loadFoods = async () => {
    try {
      const res = await axios.get(`${API}/menu`);
      setFoods(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadCategories = async () => {
    try {
      const res = await axios.get(`${API}/categories`);
      setCategories(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addFood = async (food) => {
    try {
      await axios.post(`${API}/menu`, food);
      await loadFoods();
    } catch (err) {
      console.log(err);
    }
  };

  const updateFood = async (food) => {
    try {
      await axios.put(`${API}/menu/${food.id}`, food);
      await loadFoods();
      setEditingFood(null);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteFood = async (id) => {
    try {
      await axios.delete(`${API}/menu/${id}`);
      await loadFoods();
    } catch (err) {
      console.log(err);
    }
  };

  const addCategory = async (category) => {
    try {
      await axios.post(`${API}/categories`, category);
      await loadCategories();
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEdit = () => {
    setEditingFood(null);
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
            background: "#f4f4f4"
          }}
        >

          <DashboardCards />

          <CategoryForm
            addCategory={addCategory}
          />

          <br />

          <FoodForm
            addFood={addFood}
            updateFood={updateFood}
            editingFood={editingFood}
            cancelEdit={cancelEdit}
          />

          <br />

          <FoodTable
            foods={foods}
            deleteFood={deleteFood}
            setEditingFood={setEditingFood}
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
