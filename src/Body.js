import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  let [listOfRestrarent, setlistOfRestrarent] = useState([]);
  let [FilterRestrarent, setFilterRestrarent] = useState([]);
  let [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchdata();
  }, []);
  let fetchdata = async () => {
    let response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1085242&lng=77.3410656&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let data = await response.json();
    let restro =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfRestrarent(restro);
    setFilterRestrarent(restro);
  };

  // if(listOfRestrarent.length=== 0)
  // {
  //   return(
  //     <Shimmer/>
  //  )
  // }

  return listOfRestrarent.length === 0 ? (               //conditional-rendering
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input className="search-input" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        <button  onClick={()=>
            {
              
              let filterResSearach=listOfRestrarent.filter((res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())))
              setFilterRestrarent(filterResSearach);
            }
          }>
          <i id="search-icon" className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          className="filter-Btn"
          onClick={() => {

            let filteredRes = listOfRestrarent.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRestrarent(filteredRes);
          }}
        >
          Top Reated Restrarent
        </button>
      </div>
      <div className="res-container">
        {FilterRestrarent.map((res) => (
          <Link  key={res.info.id} to={"/restaurants/"+res.info.id}  style={{textDecoration: 'none'}}><ResCard resData={res}/></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
