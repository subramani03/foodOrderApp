import { useDispatch } from "react-redux";
import BestSeller from "./BestSeller.jpeg";
import { CON_URL } from "./utils/constants";
import { addItem } from "./utils/CartSlice";
let RecommendedMenu = ({ itemCard }) => {
  let { name, defaultPrice, ratings, description, imageId, price } =
    itemCard?.dish?.info || itemCard?.card?.info;
  const dispatch =useDispatch();
  return (
    <div className="Recommended-Container">
      <div className="Recommended-Card">
        <div className="Recommended-Details">
          <img src={BestSeller} width={"120px"}></img>
          <h2>
            {name}
            {/* {console.log(itemCard.dish.info.price )} */}
          </h2>
          <h3>₹{isNaN(defaultPrice) ? price / 100 : defaultPrice / 100}</h3>
          {/* <div className="rating">
            {ratings.aggregatedRating != 0 ? (
              <>
                <span>
                  <i className="fa-solid fa-star"></i>
                </span>
                <h4>
                  {ratings.aggregatedRating.rating}
                </h4>
              </>
            ) : (
              <div></div>
            )}
          </div> */}
          <p>{description}</p>
        </div>
        <div className="Recommended-img">
          <img src={CON_URL + imageId} className="w-50 h-50"></img>
          <button className="Addbtn" onClick={()=>{
           dispatch(addItem(itemCard));
          }}>Add</button>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default RecommendedMenu;
