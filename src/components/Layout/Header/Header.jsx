import React from "react";
import { Link } from "react-router-dom";
import svgaddcontact from "../../../assets/svg/person_add-icon.svg"
const Header = () => {
    const listHeader = [{"text":"About",icon:"",link:""}
    , {"text":"Add new Todo",link:"Register"}];

    return (
    <div className="bg-zinc-800 py-4 mb-8">
        <div className="container mx-auto">
            <div className="flex flex-row">
              {listHeader.map((item) => {
                return (
                  <Link to={`/${item.link}`} key={item.text}>
                    <div className="flex px-4">
                      <p className="text-white mr-2 capitalize">{item.text}</p>
                      <img src={item.icon} alt="" />
                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
    </div>
  );
};

export default Header;