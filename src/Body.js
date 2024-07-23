import ResCard,{updatedResCard} from "./ResCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";

const Body = () => {
  let [listOfRestrarent, setlistOfRestrarent] = useState([]);
  let [FilterRestrarent, setFilterRestrarent] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);
  let {loggedInUser}=useContext(UserContext)
  let PromotedResCard =updatedResCard(ResCard);
  let fetchdata = async () => {
    // let response = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1085242&lng=77.3410656&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await response.json();
    let restro =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfRestrarent(restro);
    setFilterRestrarent(restro);
    console.log(data.data);
  };

let OnlineStatus=useOnlineStatus();
  if(OnlineStatus===false)
  {
    return(
      <div className="noInternet">
      <h2>No internet connection found !!!</h2>
      <p>Check your connection or try again later.</p>

    </div>
    
   );
  }
  let {setUserName}=useContext(UserContext);

  return listOfRestrarent.length=== 0 ? (               //conditional-rendering
    <Shimmer />
  ) : (
    <div className="body">
      <div className="mt-8 flex items-center justify-center gap-2">
        <input className="px-10 outline-none py-2 w-[60%] shadow-xl rounded-[20px]" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button className="p-2 w-[40px]  text-white bg-orange-400 rounded-[20px]" onClick={()=>
            {
              
              let filterResSearach=listOfRestrarent.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
              setFilterRestrarent(filterResSearach);
            }
          }>
          <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
         className="p-2 w-[fit] text-nowrap text-[13px] text-white bg-orange-400 rounded-[20px]" 
          onClick={() => {

            let filteredRes = listOfRestrarent.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilterRestrarent(filteredRes);
          }}
        >
          Top Reated Restrarent
        </button>
        <input className="m-1 p-1 border-2 border-orange-300 rounded-md outline-none" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
      </div>
      <div className="res-container">
        {FilterRestrarent.map((res) => (
          <Link  key={res.info.id} to={"/restaurants/"+res.info.id}  style={{textDecoration: 'none'}}>{res.info.veg?(<PromotedResCard  resData={res}/>):(<ResCard resData={res}/>)}</Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
