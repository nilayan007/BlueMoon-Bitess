import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const RestaurentMenu =() => {
    const [resInfo,setresInfo] = useState(null);
    const {resId} = useParams();


    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () =>{

        try{
        const data = await fetch(
           (MENU_API+resId)
        ); // // here we are fetching api of swiggy and got the data element from the api and json
        const json = await data.json();
        
        setresInfo(json);
        console.log(json);
        }catch (error) {
        console.error("Error fetching menu:", error);
    } // checking whether there have any issue or error on fetching the data
    };
    if (!resInfo) return <Shimmer />; // adding shimmer


    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card.info || {};
    const {itemCards} = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card ; // storing the menu
    console.log(itemCards)
   return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            
            <h2>MENU</h2>
            <ul className="res-menu-page-list">
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Price : Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
                <li>{}</li>
                <li>ok</li>
                <li>ok</li>
            </ul>
        </div>
    );
};
export default RestaurentMenu;