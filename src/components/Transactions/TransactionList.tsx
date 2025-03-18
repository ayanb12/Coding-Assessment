import { Transaction } from "../../types/transaction";
import "./TransactionStyles.css";

const TransactionList = ({ data }) => {
  const truncateText = (text: string, maxLength = 15) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const calculateAmount = (item: Transaction) => {
    if (item.cashflow === "outflow") return false;
    else return true;
  };

  const renderlist = (item, index) => {
    return (
      <div className="section-wrapper" key={index}>
        <h4 className="date-heading">{item}</h4>
        {data[item]?.map((item, index) => (
          <div className="card" key={`${item.id}${index}`}>
            <div className="card-info">
              <img src={item.logoUrl} alt="Invoice Revenue" />
              <div className="card-title">
                <p>{truncateText(item.transactionTitle)}</p>
                <div className="card-sub-title">
                  <p>{item.suburb || "City"}</p> <p className="divider">|</p>
                  <p>{item.shortCategory || "Category"}</p>
                </div>
              </div>
            </div>

            <div className="card-amount">
              <div
                className={`sign ${
                  calculateAmount(item) ? "prefix-green" : "prefix-red"
                }`}
              >
                {calculateAmount(item) ? "+" : "-"}
              </div>
              <div className="amount">${item.amount}</div>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  };

  return (
    <div className="card_wrapper">
      {Object.keys(data)?.map((item, index) => renderlist(item, index))}
    </div>
  );
};

export default TransactionList;
