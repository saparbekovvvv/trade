import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { useTrade } from "../../context/Context";

export default function Header() {
  const { balance } = useTrade();
  return (
    <header id="Header" className=" bg-black">
      <div className="container">
        <div className="flex justify-between items-center text-[#fff]">
          <div className="flex items-center">
            <img
              className="w-[100px]"
              src="https://i.pinimg.com/564x/3f/0f/5a/3f0f5a8d4c668cde6512b7fd55128a0d.jpg"
              alt=""
            />
            <NavLink to="/">TradeGO</NavLink>
          </div>

          <div className=" flex gap-[40px] items-center text-[#fff]">
            <input
              className=" rounded-lg shadow-md shadow-[#fff]"
              type="text"
            />
            <div className="   flex items-center gap-[5px]">
              <FaWallet />
              <span>Balance : {balance}</span>
            </div>

            <div className="flex items-center gap-[5px]">
              <NavLink to="/">Home </NavLink>
              <IoMdHome />
            </div>
            <div className=" flex items-center gap-[5px]">
              <NavLink to="/admin">Admin</NavLink>
              <MdAdminPanelSettings />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
