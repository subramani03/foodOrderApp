import BestSeller from "./BestSeller.jpeg";
import { CON_URL } from "./utils/constants";
let RecommendedMenu = ({ itemCard }) => {
  return (
    <div className="Recommended-Container">
      <div className="Recommended-Card">
        <div className="Recommended-Details">
          <img src={BestSeller} width={"120px"}></img>
          {console.log(itemCard)}
          <h2>{itemCard?.card?.info?.name}</h2>
          <h3>₹{itemCard?.card?.info?.price / 100}</h3>
          <div className="rating">
            {itemCard?.card?.info?.ratings?.aggregatedRating != 0 ? (
              <>
                <span>
                  <i className="fa-solid fa-star"></i>
                  {console.log(itemCard?.card?.info?.ratings?.aggregatedRating)}
                </span>
                <h4>
                  {itemCard?.card?.info?.ratings?.aggregatedRating?.rating}
                </h4>
              </>
            ) : (
              <div></div>
            )}
          </div>
          <p>{itemCard?.card?.info?.description}</p>
        </div>
        <div className="Recommended-img">
          <img src={CON_URL + itemCard?.card?.info?.imageId} width={"170px"}></img>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default RecommendedMenu;
