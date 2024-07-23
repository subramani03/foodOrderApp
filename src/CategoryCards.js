import { useState } from "react";
import RecommendedMenu from "./RecommendedMenu";
let CategoryCards=({CategoryitemCard,showItems,setShowIndex})=>
{
    let itemCards=CategoryitemCard.card.card.itemCards;
    // let [showItems,setshowItems]=useState(false);
    let [showArrows,setShowArrows]=useState("fa-solid fa-angle-down");
    function handleClick()
    {
        console.log(showItems);
        setShowIndex();
        setShowArrows(prev => prev === "fa-solid fa-angle-down" ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down");   
    }
    return(
        <div className="categoryCard">
          <div className="CategoryTitle" onClick={handleClick}>{CategoryitemCard.card.card.title}<span><i className={showArrows}></i></span></div>
          {/* {categories.map((category)=>
          (

            category.itemCards.map((item,index)=>
            (
                <RecommendedMenu key={index} itemCard={item} />

            ))
        ))} */}
        {
       showItems&& itemCards.map((item,index)=>
                   (<RecommendedMenu key={index} itemCard={item}/>)
                )
        }
        </div>
    )

};

export default CategoryCards;