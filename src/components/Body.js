import RestaurentCard from "./RestaurentCard";
import restaurantList from "../utils/mockData";
import { useState } from "react"; 

const Body = ()=>{
    const [FilterRestaurantList,setFilterRestaurantList] = useState(restaurantList);

    return (
        <div className="body"> 
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                const FilteredList = FilterRestaurantList.filter(
                    res => res.data.avgRating>4
                );
                setFilterRestaurantList(FilteredList)
                //console.log("Button clicked");
                
                 
                }}>
                Top Rated Restaurents
                </button>
            </div>
            <div className="rescardcontainer-outer">
                <div className="rescardcontainer">
                    
                    {
                        FilterRestaurantList.map(restaurant => 
                        <RestaurentCard key={restaurant.data.id} resData={restaurant}/>
                    )};
                   
                </div>
            </div>
        </div>
    );
};
export default Body;