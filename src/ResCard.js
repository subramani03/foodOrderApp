import { useContext } from "react";
import {CON_URL} from "./utils/constants";
import UserContext from "./utils/UserContext";
const ResCard = ({ resData }) => {
  let {loggedInUser}=useContext(UserContext);
    const { name, cloudinaryImageId,aggregatedDiscountInfoV3,cuisines, avgRating, deliveryTime, areaName } = resData.info;
    return (
      <div className="res_card">
        <div className="res-img">
          <img
            className="Rimg"
            src={CON_URL+cloudinaryImageId}
            width={"250px"}
            alt={name}
          />
          <span>50% OFF UP TO 100</span>
        </div>
        <h4 className="res-name">{name}</h4>
        <div className="rating">
          <span><i className="fa-solid fa-star"></i></span>
          <h4>{avgRating} • {deliveryTime} mins</h4>
        </div>
        <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
        <h4 className="res-address">{areaName}</h4>
      </div>
    );
  };
  
export const updatedResCard=(ResCard)=>
{
  return (props)=>
  {
    return (
      <div>
        <label className="absolute bg-black z-10 text-white mx-2 mr-10 p-1 rounded-lg" >Pure veg</label>
        <ResCard {...props} />
      </div>

    );
  }
}
export default ResCard;