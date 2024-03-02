import { CDN_URL } from "../utils/constants";

const RestaurentCard =(props)=>{
    const { resData } = props;
    const {
        costForTwo,
        deliveryTime,
        avgRating,cuisines,
        area,name,
        cloudinaryImageId
    } = resData?.data;
    return (
        <div className="res-card">
            <div className="card-image">
                <img className="res-logo" alt="res-logo" src={ CDN_URL+
         cloudinaryImageId}/> 
            </div>
            <div className="card-content">
                <h3>{name}</h3>  
                <h4>{area}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>⭐{avgRating}</h4>
                <h4>{deliveryTime} mins</h4>
                <h4>{costForTwo}</h4>
                
            </div>
        </div>
    );
};
export default RestaurentCard;