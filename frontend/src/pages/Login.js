import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://13.207.126.116:8081/api";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");


  const handleLogin = async (e)=>{

    e.preventDefault();


    try {


      const response = await axios.post(

        `${API}/users/login`,

        {
          email,
          password
        }

      );


      console.log("LOGIN RESPONSE");

      console.log(response.data);



      const user = response.data;



      // SAVE JWT TOKEN

      localStorage.setItem(

        "token",

        user.token

      );



      // SAVE USER DETAILS

      localStorage.setItem(

        "user",

        JSON.stringify(user)

      );



      alert("Login Successful!");



      if(user.role === "ADMIN"){

        navigate("/admin");

      }

      else{

        navigate("/");

      }


      // refresh navbar state

window.dispatchEvent(
  new Event("login")
);


    }

    catch(error){


      console.log(error);


      if(error.response){


        alert(

          error.response.data.message ||

          "Invalid Email or Password"

        );


      }

      else{


        alert(

          "Cannot connect to Spring Boot Server."

        );


      }


    }


  };



return (

<div

style={{

maxWidth:"450px",

margin:"50px auto",

padding:"30px",

background:"#fff",

borderRadius:"10px",

boxShadow:"0 0 10px rgba(0,0,0,.2)"

}}

>


<h2

style={{

textAlign:"center",

color:"#d32f2f"

}}

>

Login

</h2>



<form onSubmit={handleLogin}>


<label>

Email Address

</label>


<input

type="email"

className="form-control mb-3"

placeholder="Enter Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

required

/>



<label>

Password

</label>


<input

type="password"

className="form-control mb-3"

placeholder="Enter Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

required

/>



<button

type="submit"

className="btn btn-danger w-100"

>

Login

</button>



</form>


<p

style={{

textAlign:"center",

marginTop:"20px"

}}

>

New Customer?

{" "}

<Link to="/register">

Register Here

</Link>


</p>


</div>


);


}


export default Login;
