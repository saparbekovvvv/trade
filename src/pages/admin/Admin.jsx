import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { useTrade } from "../../context/Context";

export default function Admin() {
  const { createTradeInfo } = useTrade();
  const [type, setType] = useState("gain");
  const [balance, setBalance] = useState("");
  const [description, setDescription] = useState("");

  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const balanceChange = (e) => {
    setBalance(e.target.value);
  };
  const typeChange = (e) => {
    setType(e.target.value);
  };

  const addGames = (type) => {
    createTradeInfo({
      balance,
      description,
      type,
      date: new Date().toLocaleString(),
    });
    setType("");
    setBalance("");
    setDescription("");
  };

  return (
    <div id="Admin" className="pt-[40px]">
      <div className="container">
        <div className="">
          <div className="flex items-center gap-[10px]">
            <NavLink to="/">Back</NavLink>
            <NavLink to="/" className="text-[20px]">
              <TiArrowBack />
            </NavLink>
          </div>

          <div className="flex gap-[15px] p-5 justify-center text-[20px]">
            <button className="text-[#22c730]" onClick={() => setType("gain")}>
              Gain
            </button>
            <button className="text-[#db1c1c]" onClick={() => setType("costs")}>
              Costs
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <input
              onChange={typeChange}
              value={type}
              className="p-[5px] rounded-lg"
              type="text"
              placeholder="Description..."
            />
            <input
              onChange={descriptionChange}
              value={description}
              className="p-[5px] rounded-lg"
              type="text"
              placeholder="Description..."
            />

            <input
              onChange={balanceChange}
              value={balance}
              className="p-[5px] rounded-lg"
              type="text"
              placeholder="Balance..."
            />

            <button
              onClick={() => addGames(type)}
              className="text-[#fff] bg-[#4458cc] max-w-[200px] rounded-xl p-[10px] w-full"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
