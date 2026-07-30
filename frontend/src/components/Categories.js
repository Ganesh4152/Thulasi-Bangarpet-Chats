import React, { useEffect, useState } from "react";
import api from "../services/api";

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        api.get("/categories")
            .then((response) => setCategories(response.data));
    }, []);

    return (
        <div>
            {categories.map((category) => (
                <button key={category.id}>
                    {category.name}
                </button>
            ))}
        </div>
    );
}

export default Categories;
