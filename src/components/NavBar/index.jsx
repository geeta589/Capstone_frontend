import { Link } from "react-router-dom";



export default function NavBar() {

    return(
        <nav>
            <Link to ='/Login' >Login</Link>
            <Link to ='/Registration' >Registration</Link>
            <Link to ='/LandingPage' >Landing Page</Link>
            <Link to ='/RecipeForm' >Recipe Form</Link>
            <Link to ="/RecipeSearch">RecipeSearch</Link>
        </nav>
    )
}