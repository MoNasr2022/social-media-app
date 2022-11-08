import "./login.scss";
 import { Link } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const loginHandler = () => {
    login();
  }


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
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
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={loginHandler}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
