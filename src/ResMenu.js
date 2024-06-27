import { MENU_API } from "./utils/constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const ResMenu = () => {
  let [ResMenuInfo, setResMenuInfo] = useState(null);
  let { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  let fetchMenu = async () => {
    let response = await fetch(MENU_API + resId);
    let data = await response.json();
    setResMenuInfo(data.data);
    console.log(resId);
  };
  if (ResMenuInfo === null) {
    return <Shimmer />;
  }

  let { itemCards } =
    ResMenuInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
      ?.card?.card;
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
            {avgRating + " (" + totalRatingsString + ") "}<span>•</span> {costForTwoMessage}
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
              <b>Outlet</b><span> Avenue</span>
            </div>
            <h4 className="delivary-time">
              {/* {nearestOutletNudge.nearestOutletInfo.siblingOutlet.sla.slaString} */}20-30 mins
            </h4>
          </div>
        </div>
        <hr className="Res-Details-line" ></hr>
        <div className="delivary-discount">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu "  width={"22px"}
            alt="DISTANCE_FEE_NON_FOOD_LM"
          ></img>
          <p>Order above 149 for discounted delivery fee</p>
        </div>
      </div>
    </div>
  );
};
export default ResMenu;
