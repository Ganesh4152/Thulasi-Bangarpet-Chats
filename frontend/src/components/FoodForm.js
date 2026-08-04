import React, { useEffect, useState } from "react";
import axios from "axios";

const API = "http://13.207.126.116:8081/api";

function FoodForm({
  addFood,
  updateFood,
  editingFood,
  cancelEdit
}) {

  const [categories, setCategories] = useState([]);

  const [food, setFood] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    image: "",
    available: true,
    category: {
      id: ""
    }
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const [preview, setPreview] = useState("");

  const [uploading, setUploading] = useState(false);

  const [message, setMessage] = useState("");

  useEffect(() => {

    loadCategories();

  }, []);

  useEffect(() => {

    if (editingFood) {

      setFood(editingFood);

      setPreview(
        `http://13.207.126.116:8081${editingFood.image}`
      );

      setSelectedFile(null);

    }

  }, [editingFood]);

  const loadCategories = async () => {

    try {

      const res = await axios.get(`${API}/categories`);

      setCategories(res.data);

    } catch (err) {

      console.log(err);

    }

  };

  const uploadImage = async () => {

    if (!selectedFile)
      return food.image;

    const formData = new FormData();

    formData.append("file", selectedFile);

    const response = await axios.post(

      `${API}/upload`,

      formData,

      {

        headers: {

          "Content-Type": "multipart/form-data"

        }

      }

    );

    return response.data.image;

  };

  const clearForm = () => {

    setFood({

      id: "",

      name: "",

      description: "",

      price: "",

      image: "",

      available: true,

      category: {

        id: ""

      }

    });

    setSelectedFile(null);

    setPreview("");

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (food.name.trim() === "") {

      alert("Enter Food Name");

      return;

    }

    if (food.description.trim() === "") {

      alert("Enter Description");

      return;

    }

    if (food.price <= 0) {

      alert("Enter Valid Price");

      return;

    }

    if (!food.category.id) {

      alert("Select Category");

      return;

    }

    try {

      setUploading(true);

      const imagePath = await uploadImage();

      const payload = {

        ...food,

        image: imagePath

      };

      if (editingFood) {

        await updateFood(payload);

        setMessage("Food Updated Successfully");

      }

      else {

        await addFood(payload);

        setMessage("Food Added Successfully");

      }

      clearForm();

      if (cancelEdit) {

        cancelEdit();

      }

    }

    catch (err) {

      console.log(err);

      alert("Unable to Save Food");

    }

    setUploading(false);

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="card p-4 shadow"
    >

      <h3 className="mb-4">

        {

          editingFood

          ?

          "Edit Food"

          :

          "Add New Food"

        }

      </h3>

      {

        message &&

        <div className="alert alert-success">

          {message}

        </div>

      }

      <input
        className="form-control mb-3"
        placeholder="Food Name"
        value={food.name}
        onChange={(e)=>

          setFood({

            ...food,

            name:e.target.value

          })

        }
      />

      <textarea
        className="form-control mb-3"
        placeholder="Description"
        value={food.description}
        onChange={(e)=>

          setFood({

            ...food,

            description:e.target.value

          })

        }
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Price"
        value={food.price}
        onChange={(e)=>

          setFood({

            ...food,

            price:e.target.value

          })

        }
      />

      <select
        className="form-select mb-3"
        value={food.category?.id || ""}
        onChange={(e)=>

          setFood({

            ...food,

            category:{

              id:e.target.value

            }

          })

        }
      >

        <option value="">

          Select Category

        </option>

        {

          categories.map(cat=>(

            <option
              key={cat.id}
              value={cat.id}
            >

              {cat.name}

            </option>

          ))

        }

      </select>

      <div className="form-check mb-3">

        <input
          type="checkbox"
          className="form-check-input"
          checked={food.available}
          onChange={(e)=>

            setFood({

              ...food,

              available:e.target.checked

            })

          }
        />

        <label className="form-check-label">

          Available

        </label>

      </div>

      <input
        type="file"
        className="form-control mb-3"
        accept="image/*"
        onChange={(e)=>{

          const file=e.target.files[0];

          setSelectedFile(file);

          if(file){

            setPreview(

              URL.createObjectURL(file)

            );

          }

        }}
      />

      {

        preview &&

        <div className="mb-3">

          <h5>

            Image Preview

          </h5>

          <img

            src={preview}

            alt="Preview"

            style={{

              width:"250px",

              borderRadius:"10px",

              border:"2px solid #ccc"

            }}

          />

        </div>

      }

      <button
        className="btn btn-success me-2"
        disabled={uploading}
      >

        {

          uploading

          ?

          "Saving..."

          :

          editingFood

          ?

          "Update Food"

          :

          "Save Food"

        }

      </button>

      {

        editingFood &&

        <button

          type="button"

          className="btn btn-secondary ms-2"

          onClick={() => {

            clearForm();

            cancelEdit();

          }}

        >

          Cancel

        </button>

      }

    </form>

  );

}

export default FoodForm;
