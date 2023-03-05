import React, { useState, useContext } from "react";
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

function Property() {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [Open, setOpen] = useState(false);
  return (
    <Menu as="div">
      <Menu.Button onClick={() => setOpen(!Open)} className="button Property">
        <RiHome5Line />
        <div>
          <div>{property}</div>
        </div>
        {Open ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
      </Menu.Button>
      <Menu.Items className={"dropdown-menu"}>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              onClick={() => setProperty(property)}
              as="li"
              key={index}
              className="transit"
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}

export default Property;
