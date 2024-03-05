import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IconArrowLeft, IconSun, Logo } from "../assets/icons/icons";
import AvatarImg from "../assets/images/avatar.png";

const ViewInvoice = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf("/") + 1);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/invoice/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  });

  return (
    <div className="h-screen bg-[#141625] flex flex-row items-center gap-[200px]">
      <div className="text w-[100px] left-0 top-0 bg-[#141625] h-screen border border-[#1F213A] rounded-r-[25px] flex flex-col justify-between items-center">
        <div className="border border-[#7C5DF9] bg-[#7C5DF9] rounded-tr-[25px] py-[20px] px-[35px]">
          <Logo />
        </div>
        <div className="flex flex-col items-center py-[6px] space-y-2">
          <span className="px-[35px] py-[20px] hover:bg-[#252945]">
            <IconSun />
          </span>
          <span className="h-[50px] w-[50px] border rounded-full p-[7px] bg-[white]">
            <img src={AvatarImg} alt="" />
          </span>
        </div>
      </div>

      <div>
        <Link to="/invoicelist">
          <button className="text-white mb-3 flex flex-row gap-2 items-center">
            <IconArrowLeft /> <p>Go Back</p>
          </button>
        </Link>
        <div className="text-white flex flex-col justify-between gap-[50px] w-[600px] h-[550px]">
          <div className="bg-[#1F213A] h-[90px] flex flex-row justify-between items-center px-5 border-[#1F213A] rounded-md">
            <button className="text-sm border py-2 px-4 bg-[#252946] rounded-full border-[#252946] hover:bg-[#7C5DF9] transition-colors duration-300">
              Edit
            </button>
            <button className="text-sm border py-2 px-4 bg-[#ED5758] rounded-full text-white border-[#ED5758] hover:bg-[#1F213A] hover:text-[#1F213A] transition-colors duration-300">
              Delete
            </button>
          </div>
          <div
            className="w-auto h-[490px] bg-[#1F213A] border-[#1F213A] rounded-md"
            key={item.id}
          >
            <div className="flex flex-row justify-between">
              <div className="w-[100px] h-[100px] flex p-4 flex-col items-center border">
                <p>{item.id}</p>
                <p>{item.dec}</p>
              </div>
              <div className="w-[100px] h-[100px] flex flex-col items-center border">
                <p>{item.stadd}</p>
                <p>{item.city1}</p>
                <p>{item.postcode1}</p>
                <p>{item.country1}</p>
              </div>
            </div>
            <div>
              <div className="w-[100px] h-[200px] flex p-4 flex-col items-center border">
                <div>
                  <p>in date</p>
                  <p>date</p>
                </div>
                <div>
                  <p>payment due</p>
                  <p>date</p>
                </div>
              </div>
              <div>
                <p>bill to</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
