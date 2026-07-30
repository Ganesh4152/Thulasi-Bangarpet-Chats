import { Link } from "react-router-dom";

function Navbar() {

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-success">

<div className="container">

<Link className="navbar-brand" to="/">
🍽️ Thulasi Bangarpet Chats
</Link>

<div>

<Link className="btn btn-light m-1" to="/">Home</Link>

<Link className="btn btn-light m-1" to="/menu">Menu</Link>

<Link className="btn btn-light m-1" to="/cart">Cart</Link>

<Link className="btn btn-light m-1" to="/orders">Orders</Link>

<Link className="btn btn-warning m-1" to="/login">Login</Link>

</div>

</div>

</nav>

)

}

export default Navbar;
