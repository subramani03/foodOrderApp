import { MENU_API, CYCLE_URL } from "./utils/constants";
import { useParams } from "react-router-dom";
import useResMenuApi from "./utils/useResMenuApi";
import Shimmer from "./Shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";
import CategoryCards from "./CategoryCards";
import { useState } from "react";
const ResMenu = () => {
  let { resId } = useParams();
  let [showIndex,setShowIndex]=useState(null);
  let [showItem,setshowItem]=useState(false);
  let ResMenuInfo = useResMenuApi(MENU_API, resId);
  // console.log(ResMenuInfo);
  let OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return (
      <div className="noInternet">
        <h2>No internet connection found !!!</h2>
        <p>Check your connection or try again later</p>
      </div>
    );
  }

  if (ResMenuInfo === null) {
    return <Shimmer />;
  }
  let itemCategories =
  ResMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  let categoryCard=itemCategories.filter(c=>(
    c?.card?.card?.["@type"]===
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
));

// console.log(categoryCard)



  let itemCards =
    ResMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.itemCards ||    ResMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card?.carousel;
  let {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
  } = ResMenuInfo?.cards?.[2]?.card?.card?.info || {};

  return (
    <div className="Res-menu">
      <div className="Res-name">
        <h2>{name}</h2>
      </div>

      <div className="Res-Details">
        <div className="Res-rating">
          <span>
            <i className="fa-solid fa-star"></i>
          </span>
          <h2>
            {avgRating + " (" + totalRatingsString + ") "}
            <span>•</span> {costForTwoMessage}
          </h2>
        </div>
        <h3 className="cuisines">{cuisines?.join(", ")}</h3>
        <div className="outlet-container">
          <div className="outlet-logo">
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot"></div>
          </div>
          <div className="outlet-text">
            <div className="outlet">
              <b>Outlet</b>
              <span> Avenue</span>
            </div>
            <h4 className="delivery-time">20-30 mins</h4>
          </div>
        </div>
        <hr className="Res-Details-line"></hr>
        <div className="delivery-discount">
          <img src={CYCLE_URL} width={"22px"} alt="CYCLE_URL"></img>
          <p>Order above 149 for discounted delivery fee</p>
        </div>
      </div>
      {/* <h2>Recommended</h2>
      {console.log(itemCards)}
      {itemCards.map((item,index) => (
        <RecommendedMenu key={index} itemCard={item} />
      ))} */}
      {categoryCard.map((item,index) => (
        <CategoryCards key={index} CategoryitemCard={item}
        showItems={index===showIndex ?true:false}
        setShowIndex={()=>{setShowIndex(index);
          setshowItem(!showItem);}
        } />
      ))}
    </div>
  );
};

export default ResMenu;
