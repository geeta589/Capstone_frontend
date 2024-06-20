import RecipeSearch from "../RecipeSearch";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    navigate('/RecipeForm')

  }

  return (
    <>
      <div className="login"> 
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Login </label> 
          <input type="text" autoComplete="off" name="login" />
           <label htmlFor="">Password</label> 
          <input type="password" autoComplete="off" name="password" />

          </form> 
          
          <input type="Submit" />
          
      </div>
     
    </>
  );
}

export default Login;
