import React, { useContext } from "react";
import CountryDd from "./Country";
import Property from "./Propertys";
import PriceRange from "./PriceRange";
import Dash from "./Dash";
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import "../App.css";

const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="search">
      <CountryDd />
      {/* <Dash />
      <PriceRange /> */}
      <Property />
      <button onClick={() => handleClick()} className="button search-button">
        <RiSearch2Line />
        <span>Search</span>
      </button>
    </div>
  );
};

export default Search;
