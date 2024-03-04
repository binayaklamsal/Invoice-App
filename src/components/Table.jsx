import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ViewInvoice from "./ViewInvoice";

const Table = () => {
  const [invoiceList, setInvoiceList] = useState([]);

  const getInvoiceList = async () => {
    try {
      const response = await axios.get("http://localhost:3000/invoice");
      setInvoiceList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInvoiceList();
    const interval = setInterval(() => {
      getInvoiceList();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div  className="overflow-y-auto scrollbar-hide w-auto ">
      {invoiceList.map((item, index) => (
        <Link to={`/viewinvoice/${item?.id}`}
          key={item.id}
          className="w-full pt-[40px] flex flex-col gap-4 hover:animate-bounce">
          <div className="h-[70px] flex items-center text-white bg-[#1E2139] px-9 border-[#1E2139] outline-none rounded-[10px]">
            <div className="flex flex-row w-full justify-between">
              <div>{index + 1}</div>
              <div>{item.payment}</div>
              <div>{item.clientName}</div>
              <div>{item.total}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Table;
