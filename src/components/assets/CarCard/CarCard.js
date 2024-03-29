import React from "react";

const CarCard = ({ item }) => {

    return (
      <div className="card-design">
        <div className="card-image-div">
          <img src={item.cardeatails ? item.cardeatails.picture : ""} alt="Car" className="card-image"/>
        </div>
        {/* <div className="lender-image-div">
          <img src={item.picture} alt="hat lodu"  className="lender-image"/>
        </div> */}
        <h4 className="card-title">{item.lenderdetails.lender_name}</h4>
        <h4 className="card-title">{(item.cardeatails ? item.cardeatails.company : "") + " " + (item.cardeatails ? item.cardeatails.modl : "")}</h4>
        <p className="card-channel">
          <i>{item.cardeatails ? item.cardeatails.rent : ""}</i>
        </p>
        <div className="card-metrics">
          {/* {item.views} &bull; {item.published} */}
        </div>
      </div>
    );
  };

  export default React.memo(CarCard);