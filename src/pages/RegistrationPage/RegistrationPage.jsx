import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Registration() {
  const [Fname, setFname] = useState();
  const [Lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/user/Registration", { Fname, Lname, email, password })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
      navigate('/Login');
    // searchRec(formData.searchTerm);
  };

  return (
    <>
      <div className="registration">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="First Name">
              <strong>First Name</strong>{" "}
            </label>
            <input
              type="text"
              name="text"
              autoComplete="off"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Last Name">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              name="text"
              autoComplete="off"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn" type="Submit ">Register</button>
        </form>
        <p>Already Have an Account </p>
        <Link  to ="/Login">Login</Link>
        {/* <input type="Submit" /> */}
      </div>
    </>
  );
}

export default Registration;
