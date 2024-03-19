import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useTrade = () => useContext(Context);

const ContextPage = ({ children }) => {
  const [trades, setTrades] = useState([]);
  const [balance, setBalance] = useState(0);

  function createTradeInfo(obj) {
    let objectTrade = {
      ...obj,
      id: Date.now(),
    };
    setTrades([...trades, objectTrade]);
    if (obj.type === "gain") {
      setBalance((money) => money + parseFloat(obj.balance));
    } else if (obj.type === "costs") {
      setBalance((money) => money - parseFloat(obj.balance));
    }
  }

  function deleteTradeInfo(id, type, amount) {
    const newTrades = trades.filter((el) => el.id !== id);
    setTrades(newTrades);
    if (type === "gain") {
      setBalance((money) => money - parseFloat(amount));
    }
    if (type === "costs") {
      setBalance((money) => money + parseFloat(amount));
    }
  }

  const values = {
    deleteTradeInfo,
    trades,
    createTradeInfo,
    balance,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextPage;
