import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/UserLogin", { email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    navigate("/RecipeSearch");
  };

  return (
    <>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Login </label>
          <input
            type="text"
            autoComplete="off"
            name="login"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>

        <input type="Submit" />
      </div>
    </>
  );
}

export default Login;
