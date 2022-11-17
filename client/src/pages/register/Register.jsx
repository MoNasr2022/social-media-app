import "./register.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) =>({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", inputs);
      
    } catch (err) {
      setErr(err.response.data.error);
      
    }
    
  };
  
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form action="">
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {err &&  err }
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Everyone Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            excepturi magni consectetur ratione pariatur. Quidem?
          </p>
          <span>Do you have an account?</span>

          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
