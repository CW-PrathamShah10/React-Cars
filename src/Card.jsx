import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
const Card = ({ carData }) => {
  const defaultImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEL2XN0yoUkPEVUJ4eUmqsvfdkyZQr63RAw&s";
  return (
    <div>
      <div className="image">
        <img
          style={{
            borderRadius: "8px 8px 0px 0px",
            width: "100%",
            objectFit: "cover",
          }}
          src={carData?.imageUrl || defaultImageUrl}
        />
      </div>
      <div className="card-content">
        <h3 className="car-name">
          {carData?.makeYear} {carData?.carName}
        </h3>
        <p>
          {carData?.km} km | {carData?.fuel} | {carData?.cityName}
        </p>
        <div className="price-tag">
          <div>{carData?.price}</div>
          <div>{carData?.emiText}</div>
        </div>
        <button className="sell-btn">
          <span>Get Seller Details</span>
        </button>
      </div>
    </div>
  );
};
export default Card;
