import React, { useState } from "react";
import axios from "axios";

function FoodForm({ addFood }) {

  const [food, setFood] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    available: true
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const uploadImage = async () => {

    if (!selectedFile) {
      return "";
    }

    const formData = new FormData();

    formData.append("file", selectedFile);

    const response = await axios.post(
      "http://13.207.126.116:8081/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    return response.data;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    let imagePath = food.image;

    if (selectedFile) {

      imagePath = await uploadImage();

    }

    addFood({
      ...food,
      image: imagePath
    });

    setFood({
      name: "",
      description: "",
      price: "",
      image: "",
      available: true
    });

    setSelectedFile(null);

  };

  return (

    <form onSubmit={handleSubmit}>

      <h3>Add New Food</h3>

      <input
        className="form-control mb-3"
        placeholder="Food Name"
        value={food.name}
        onChange={(e)=>
          setFood({...food,name:e.target.value})
        }
      />

      <textarea
        className="form-control mb-3"
        placeholder="Description"
        value={food.description}
        onChange={(e)=>
          setFood({...food,description:e.target.value})
        }
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Price"
        value={food.price}
        onChange={(e)=>
          setFood({...food,price:e.target.value})
        }
      />

      <input
        type="file"
        className="form-control mb-3"
        onChange={(e)=>
          setSelectedFile(e.target.files[0])
        }
      />

      <button
        className="btn btn-success"
      >
        Save Food
      </button>

    </form>

  );

}

export default FoodForm;
