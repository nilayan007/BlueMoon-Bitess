import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react"; 

const Body = ()=>{
    const [FilterRestaurantList,setFilterRestaurantList] = useState(restaurantList); //sate variable 

    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5199068&lng=87.3065834&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setFilterRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            
        }; // here we are fetching api of swiggy and got the data element from the api and json

        
    return (
        <div className="body"> 
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                const FilteredList = FilterRestaurantList.filter(
                    res => res.info.avgRating>4.2
                );
                setFilterRestaurantList(FilteredList)
                //console.log("Button clicked");   logic of filtering the elemnts              
                }}>
                Top Rated Restaurents
                </button>
            </div>
            <div className="rescardcontainer-outer">
                <div className="rescardcontainer">
                    
                    {
                        FilterRestaurantList.map(restaurant => 
                        <RestaurentCard key={restaurant.info.id} resData={restaurant}/>
                    )}
                   
                </div>
            </div>
        </div>
    );
};
export default Body;