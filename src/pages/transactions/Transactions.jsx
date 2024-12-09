import React from "react";
import HeaderButtons from "../../components/header_buttons/HeaderButtons";
import TransactionTable from "../../components/transaction_table/TransactionTable";

function Transactions() {
  return (
    <>
      <div
        className="flex flex-col space-y-3 w-full h-full bg-[#545454] rounded-xl overflow-hidden p-2"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <HeaderButtons allowedBtns={['showHide']} />
        <div style={{ height: "calc(100vh - 10rem)" }}>
          <TransactionTable />
        </div>
      </div>
    </>
  );
}

export default Transactions;
