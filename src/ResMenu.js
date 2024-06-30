import {MENU_API,CYCLE_URL} from "./utils/constants";
import { useParams } from "react-router-dom";
import useResMenuApi from "./utils/useResMenuApi";
import RecommendedMenu from "./RecommendedMenu";
import Shimmer from "./shimmer";
import useOnlineStatus from "./utils/useOnlineStatus";


const ResMenu = () => {
  let { resId } = useParams();

  let ResMenuInfo=useResMenuApi(MENU_API,resId);

  let OnlineStatus=useOnlineStatus();
  if(OnlineStatus===false)
  {
    return(
      <div className="noInternet">
        <h2>No internet connection found !!!</h2>
        <p>Check your connection or try again later</p>

      </div>
      
   )
  }

  if (ResMenuInfo === null) {
    return <Shimmer />;
  }
    let  itemCards  =ResMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.[1]?.card?.card.itemCards
    let {
    name,
    cuisines,
    costForTwoMessage,
    costForTwo,
    cloudinaryImageId,
    avgRating,
    nearestOutletNudge,
    totalRatingsString,
  } = ResMenuInfo?.cards?.[2]?.card?.card?.info;
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
        <h3 className="cuisines">{cuisines.join(",")}</h3>
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
            <h4 className="delivary-time">
              {/* {nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla.slaString} */}
              20-30 mins
            </h4>
          </div>
        </div>
        <hr className="Res-Details-line"></hr>
        <div className="delivary-discount">
          <img src={CYCLE_URL} width={"22px"} alt="CYCLE_URL"></img>
          <p>Order above 149 for discounted delivery fee</p>
        </div>
      </div>
      <h1>Recommended</h1>
      {itemCards.map((items)=>(
            <RecommendedMenu key={items.card.info.id} itemCard={items}/>
      ))}
   
    
    </div>
  );
};
export default ResMenu;
