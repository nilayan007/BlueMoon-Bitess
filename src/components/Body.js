import RestaurentCard from "./RestaurentCard";
//import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
 
const Body = ()=>{
    const [FilterRestaurantList,setFilterRestaurantList] = useState([]); //sate variable 
    const [ForFilterRestaurantList,setForFilterRestaurantList] = useState([]);
    const [searchText,setsearchText] = useState("");
    console.log("ok done, rendered");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5199068&lng=87.3065834&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
       // console.log(json);
        setFilterRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setForFilterRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
            
        }; // here we are fetching api of swiggy and got the data element from the api and json

    //conditional rendering
    if(FilterRestaurantList==0){
        return <Shimmer/> // shimmer effect
    }    
    return (
        <div className="body"> 
            <div className="filter">


              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={()=>{
                    console.log(searchText);
                    const searchFilterRestaurent = FilterRestaurantList.filter(res=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setForFilterRestaurantList(searchFilterRestaurent); // logic of searching the specific list of restaurent 
                }}> Search </button>
              </div>


                <button className="filter-btn"
                onClick={()=>{
                const FilteredList = FilterRestaurantList.filter(
                    res => res.info.avgRating>4.2
                );
                setForFilterRestaurantList(FilteredList)
                //console.log("Button clicked");   logic of filtering the elemnts              
                }}>
                Top Rated Restaurents
                </button>
            </div>


            <div className="rescardcontainer-outer">
                <div className="rescardcontainer">
                    
                    {
                        ForFilterRestaurantList.map(restaurant => 
                       <Link key={restaurant.info.id} to={"/restaurents/"+restaurant.info.id}> <RestaurentCard  resData={restaurant}/></Link>
                    )}
                   
                </div>
            </div>
        </div>
    );
};
export default Body;