import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";
import TransactionList from "./TransactionList";
import { Transaction } from "../../types/transaction";
import "./TransactionStyles.css";

import checkIcon from "../../assets/check-circle-fill.svg";
import plusIcon from "../../assets/plus.svg";
import minusIcon from "../../assets/minus.svg";

const API_URL = "http://localhost:3004/transactions";

const Transactions = () => {
  // HOC Pattern to extract any business logic we have
  const RenderList = useFetchData<Transaction>(TransactionList, API_URL);

  const [cashflow, setCashflow] = useState<"inflow" | "outflow" | "">("");

  const handleClick = (str: "inflow" | "outflow" | "") => {
    setCashflow(str);
  };

  return (
    <div className="content-wrapper">
      <div className="filter-icons">
        <button className="filter-all" onClick={() => handleClick("")}>
          <img src={checkIcon} alt="filter-all" />
          <p>All</p>
        </button>
        <button className="cashflow" onClick={() => handleClick("inflow")}>
          <img src={plusIcon} alt="inflow" />
        </button>
        <button className="cashflow" onClick={() => handleClick("outflow")}>
          <img src={minusIcon} alt="outflow" />
        </button>
      </div>

      <RenderList cashflow={cashflow} />
    </div>
  );
};

export default Transactions;
