import React, { useState, useContext } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRange = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: "price Range (any)",
    },
    {
      value: "110000 - 140000",
    },
    {
      value: "170000 - 200000",
    },
    {
      value: "210000 - 220000",
    },
    {
      value: "20000 - 30000",
    },
    {
      value: "40000 - 117000",
    },
    {
      value: "145000 - 139000",
    },
    {
      value: "180000 - 213000",
    },
    {
      value: "221000 - 21000",
    },
    {
      value: "32000 - 38000",
    },
  ];
  return (
    <Menu>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className="button Price">
        <RiWallet3Line />
        <div>
          <div>Choose Price</div>
          <div>{price}</div>
        </div>

        {isOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </Menu.Button>
      <Menu.Items>
        {prices.map((price, index) => {
          return (
            <Menu.Item onClick={() => setPrice(price.value)} key={index}>
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRange;
