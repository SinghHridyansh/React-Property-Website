import React, { useState, useContext } from "react";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

function CountryDd() {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu>
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="button location"
      >
        <RiMapPinLine />
        <div className=" location-inside">
          <div>Location</div>
          <div>{country}</div>
        </div>
        {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </Menu.Button>
      <Menu.Items>
        {countries.map((country, index) => {
          return (
            <Menu.Item onClick={() => setCountry(country)} as="li" key={index}>
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default CountryDd;
