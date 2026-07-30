import React, { useEffect, useState } from "react";
import api from "../services/api";

function Menu() {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        api.get("/menu")
            .then((response) => setMenu(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container">
            <h2>Thulasi Bangarpet Chats</h2>

            {menu.map((item) => (
                <div key={item.id}>
                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <strong>₹ {item.price}</strong>
                </div>
            ))}
        </div>
    );
}

export default Menu;
