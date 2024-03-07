import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
const RestaurentMenu =() => {
    const [resInfo,setresInfo] = useState("");

    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.5199068&lng=87.3065834&restaurantId=755416&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
        setresInfo(json.data);
    };
    if (resInfo == "") <Shimmer/>;

    //const {name,cuisines,costForTwoMessage}= resInfo?.cards[0].card.card.info;
   // const {itemCards} = resInfo.cards[2].groupedCard.REGULAR.cards[1].card.card;
   return (
        <div className="menu">
       
            
            <ul>
                <li>ok</li>
                <li>ok</li>
                <li>ok</li>
            </ul>
        </div>
    );
};
export default RestaurentMenu;