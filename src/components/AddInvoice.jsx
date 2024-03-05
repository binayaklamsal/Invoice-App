import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const EditInvoice = () => {
  const [inputData, setInputData] = useState({
    stadd: "",
    city1: "",
    postCode1: "",
    country1: "",
    clientName: "",
    email: "",
    staddress: "",
    city2: "",
    postCode2: "",
    country2: "",
    date: "",
    payment: "",
    dec: "",
    itemName: "",
    qty: "",
    price: "",
    total: "",
  });
  const [error, setError] = useState({});
  const [isValidate, setIsValidate] = useState(false);
  const [loading, setLoading] = useState(false);

  const validation = (value) => {
    let newErr = {};
    if (!value.stadd) {
      newErr = { ...newErr, stadd: "Street address required!" };
    }
    if (!value.city1) {
      newErr = { ...newErr, city1: "City name required!" };
    }
    if (!value.postCode1) {
      newErr = { ...newErr, postCode1: "PostCode required!" };
    }
    if (!value.country1) {
      newErr = { ...newErr, country1: "Country name required!" };
    }
    if (!value.clientName) {
      newErr = { ...newErr, clientName: "Client name required!" };
    }
    if (!value.email) {
      newErr = { ...newErr, email: "Email required!" };
    }
    if (!value.staddress) {
      newErr = { ...newErr, staddress: "Street address required!" };
    }
    if (!value.city2) {
      newErr = { ...newErr, city2: "City name required!" };
    }

    if (!value.postCode2) {
      newErr = { ...newErr, postCode2: "PostCode required!" };
    }
    if (!value.country2) {
      newErr = { ...newErr, country2: "Country name required!" };
    }
    if (!value.date) {
      newErr = { ...newErr, date: "Date required!" };
    }
    if (!value.payment) {
      newErr = { ...newErr, payment: "Payment required!" };
    }
    if (!value.dec) {
      newErr = { ...newErr, dec: "Descsription required!" };
    }
    if (!value.itemName) {
      newErr = { ...newErr, itemName: "Item Name required!" };
    }
    if (!value.qty) {
      newErr = { ...newErr, qty: "Quantity of item required!" };
    }
    if (!value.price) {
      newErr = { ...newErr, price: "Price required!" };
    }

    return newErr;
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const newError = validation(inputData);
    setError(newError);
    setIsValidate(true);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const postData = async () => {
    setLoading(true);
    await axios
      .patch("http://localhost:3000/invoice", inputData)
      .then((res) => {
        console.log(res);
        Navigate("/navigate");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  };

  const getInvoice = () => {
    axios
      .get("http://localhost:3000/invoice")
      .then((res) => {
        setInputData({
          ...res.data[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getInvoice();
  });

  useEffect(() => {
    if (Object.keys(error).length === 0 && isValidate) {
      postData();
    }
  }, [error, isValidate]);

  return (
    <form
      onSubmit={handelSubmit}
      className="h-screen overflow-y-auto scrollbar-hide"
    >
      <div className="flex flex-col  px-[30px]  ">
        <h1 className="pt-[15px] font-bold text-2xl">New Invoice</h1>
        <h1 className="pt-5 text-[#7C5DF9]">Bill Form</h1>

        <div className="py-4 flex flex-col gap-2">
          <label htmlFor="" className="">
            Street Address
          </label>
          <input
            value={inputData.stadd}
            onChange={handleChange}
            name="stadd"
            className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
          />
          <p className="text-sm text-red-500">{error?.stadd}</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              City
            </label>
            <input
              value={inputData.city1}
              onChange={handleChange}
              name="city"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.city}</p>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              PostCode
            </label>
            <input
              value={inputData.postCode1}
              onChange={handleChange}
              name="postCode1"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.postCode1}</p>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Country
            </label>
            <input
              value={inputData.country1}
              onChange={handleChange}
              name="country1"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.country1}</p>
          </div>
        </div>
        <h1 className="pt-5 text-[#7C5DF9]">Bill To</h1>
        <div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Client's Name
            </label>
            <input
              value={inputData.clientName}
              onChange={handleChange}
              name="clientName"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.clientName}</p>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Client's Email
            </label>
            <input
              value={inputData.email}
              onChange={handleChange}
              name="email"
              type="email"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.email}</p>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Street Address
            </label>
            <input
              value={inputData.staddress}
              onChange={handleChange}
              name="staddress"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.staddress}</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="py-4 flex flex-col gap-2">
              <label htmlFor="" className="">
                City
              </label>
              <input
                value={inputData.city2}
                onChange={handleChange}
                name="city2"
                className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
              />
              <p className="text-sm text-red-500">{error?.city2}</p>
            </div>
            <div className="py-4 flex flex-col gap-2">
              <label htmlFor="" className="">
                PostCode
              </label>
              <input
                value={inputData.postCode2}
                onChange={handleChange}
                name="postCode2"
                className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
              />
              <p className="text-sm text-red-500">{error?.postCode2}</p>
            </div>
            <div className="py-4 flex flex-col gap-2">
              <label htmlFor="" className="">
                Country
              </label>
              <input
                value={inputData.country2}
                onChange={handleChange}
                name="country2"
                className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
              />
              <p className="text-sm text-red-500">{error?.country2}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="py-4 flex flex-col gap-2">
              <label htmlFor="" className="">
                Invoice Date
              </label>
              <input
                value={inputData.date}
                onChange={handleChange}
                name="country"
                type="date"
                className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
              />
              <p className="text-sm text-red-500">{error?.date}</p>
            </div>
            <div className="py-4 flex flex-col gap-2">
              <label htmlFor="" className="">
                Payment Terms
              </label>
              <input
                value={inputData.payment}
                onChange={handleChange}
                name="payment"
                type="option"
                className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
              />
              <p className="text-sm text-red-500">{error?.payment}</p>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Project Description
            </label>
            <input
              value={inputData.dec}
              onChange={handleChange}
              name="dec"
              type="option"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.dec}</p>
          </div>
        </div>
        <h1 className="pt-5 text-[#7C5DF9]">Item Lists</h1>
        <div className="py-4 flex flex-col gap-2">
          <label htmlFor="" className="">
            Item Name
          </label>
          <input
            value={inputData.itemName}
            onChange={handleChange}
            name="itemName"
            type="option"
            className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
          />
          <p className="text-sm text-red-500">{error?.itemName}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Qty
            </label>
            <input
              value={inputData.qty}
              onChange={handleChange}
              name="qty"
              type="option"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.qty}</p>
          </div>
          <div className="py-4 flex flex-col gap-2">
            <label htmlFor="" className="">
              Price
            </label>
            <input
              value={inputData.price}
              onChange={handleChange}
              name="price"
              type="option"
              className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
            />
            <p className="text-sm text-red-500">{error?.price}</p>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-2">
          <label htmlFor="" className="">
            Total
          </label>
          <input
            value={inputData.total}
            onChange={handleChange}
            name="total"
            type="option"
            className="block w-full p-2 bg-[#1F213A] text-white border border-[#141625] rounded-lg  text-base   "
          />
        </div>
      </div>
      <div className=" py-4 px-3 flex flex-row justify-between">
        <div className="cursor-pointer border-[1px] border-[#7C5DFA]  bg-white p-[10px] rounded-[28px] flex flex-row gap-3 items-center hover:animate-pulse">
          <p className="text-[#7E88C3]"> Discard</p>
        </div>
        <Link to="/invoicelist">
          <button
            type="submit"
            className="cursor-pointer border-[1px] border-[#7C5DFA] bg-[#7C5DFA] p-[10px] rounded-[28px] flex flex-row gap-3 items-center hover:animate-pulse"
          >
            {loading ? <p className="spinner"></p> : "Save and Send"}
          </button>
        </Link>
      </div>
    </form>
  );
};

export default EditInvoice;
