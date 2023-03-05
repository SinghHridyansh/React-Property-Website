import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { imageLg, address, bedrooms, bathrooms, surface, price } = house;
  return (
    <div className="house">
      <img src={imageLg} alt="" className="image" />
      <div></div>
      <div>₹ {price}</div>
      <div>{address}</div>
      <div className="house-details">
        <div className="deets">
          <div>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className="deets">
          <div>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="deets">
          <div>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
    </div>
  );
};

export default House;
