import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvoiceList from "../InvoiceList";
import ViewInvoice from "../ViewInvoice";
import EmptyInvoice from "../EmptyInvoice";
import AddInvoice from "../AddInvoice";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EmptyInvoice />} />
      <Route path="/invoicelist" element={<InvoiceList />} />
      <Route path="/viewinvoice/:id" element={<ViewInvoice />} />
    </Routes>
    // <AddInvoice />
    // <EmptyInvoice/>
  );
};

export default AppRoutes;
