import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);
  if (loading) {
    return <ImSpinner2 />;
  }

  if (houses.length < 1) {
    return <div>Sorry, Nothing found</div>;
  }

  return (
    <section>
      <div>
        <div className="property-box">
          {houses.map((house, index) => {
            return <House house={house} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
