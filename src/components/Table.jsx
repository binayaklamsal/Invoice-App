import React, { useEffect, useState } from "react";
import axios from "axios";

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
  }, []);

  return (
    <div className="overflow-y-auto scroll-smooth scrollbar-hidden  scrollbar-thin scrollbar-track-slate-500 scrollbar-thumb-[#1F213A]">
      {invoiceList.map((item, index) => (
        <div key={item.id} className="w-full pt-[40px] flex flex-col gap-4">
          <div className="h-[70px] flex items-center text-white bg-[#1E2139] px-9 border-[#1E2139] outline-none rounded-[10px]">
            <div className="flex flex-row w-full justify-between">
              <div>{index + 1}</div>
              <div>{item.payment}</div>
              <div>{item.clientName}</div>
              <div>{item.total}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
