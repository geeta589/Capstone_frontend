import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeForm from "../RecipeForm/index"
import DisplayRecipe from "../DisplayRecipe";

export default function RecipeSearch() {
  // const params = useParams();
  // const searchRec = params.searchTerm;

  const [item , setItem] = useState();
  const [show , setShow] =useState(false)

  const getRecipe = async (searchTerm) => {
    try {
      // const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchTerm}`);
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
      const data = await response.json();
      console.log(data.meals);
      setItem(data.meals);
      setShow(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(()=>{
     getRecipe("Chicken"); 
  }, []);

  // const searched =()=>{
    return(
        <>
            <h1>Recipes</h1>
            {
            show ? <DisplayRecipe data ={item}/> : "Not Found"
             }
            
        </>
    )
  }


// }
