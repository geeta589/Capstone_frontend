
function DisplayRecipe({data}) {

return(
   <>   {
      (!data) ? "Not Found" :data.map(item =>(
         <div>
         <h1>{item.strMeal}</h1>
         <img src={item.strMealThumb} alt="" />
      </div> 
      ))
   }
</>

  
)

}

export default DisplayRecipe;

