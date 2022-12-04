import "./login.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data)
      console.log(err.response.data);
      setInputs({})
    }
    
  };
  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Everyone Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
            excepturi magni consectetur ratione pariatur. Quidem?
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
