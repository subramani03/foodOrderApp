let fetchdata=async()=>{
let response= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING")
let data = await response.json();
let restro=data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

restro.map(res=> 
  isNaN(res.info.aggregatedDiscountInfoV3.header+" "+res.info.aggregatedDiscountInfoV3.subHeader)?console.log(res.info.aggregatedDiscountInfoV3.header+" "+res.info.aggregatedDiscountInfoV3.subHeader):console.log("0"));
// console.log(restro[0].info.aggregatedDiscountInfoV3.header+" "+restro[0].info.aggregatedDiscountInfoV3.subHeader);
}

fetchdata();
