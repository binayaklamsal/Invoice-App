import React, { useState } from "react";
import { IconArrowDown, IconPlus, IconSun, Logo } from "../assets/icons/icons";
import MessageImg from "../assets/images/message.png";
import AvatarImg from "../assets/images/avatar.png";
import AddInvoice from "./AddInvoice";

const EmptyInvoice = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleSidebar = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="h-screen  bg-[#141625] flex flex-row gap-[300px]  ">
      <div
        className={`h-screen bg-[#252945] fixed overflow-hidden left-0 z-5  transition-all ease-out duration-950  ${
          isShow ? "w-[700px]" : "w-0 -translate-x-full"
        }`}
      >
        <div className="flex flex-row">
          <div className=" text w-[100px] left-0 top-0 bg-[#1F213A] h-screen border border-[#1F213A] rounded-r-[25px] flex flex-col justify-between items-center">
            <div className="border border-[#7C5DF9] bg-[#7C5DF9] rounded-tr-[25px] py-[20px] px-[35px]">
              <Logo />
            </div>
            <div className="flex flex-col items-center py-[6px] space-y-2 ">
              <span className=" px-[35px] py-[20px] hover:bg-[#252945] ">
                <IconSun />
              </span>

              <span className="h-[50px] w-[50px] border rounded-full p-[7px] bg-[white]">
                <img src={AvatarImg} alt="" />
              </span>
            </div>
          </div>
          <div className=" w-full  items-center text-white">
            <AddInvoice />
          </div>
        </div>
      </div>
      <div className=" text w-[100px] left-0 top-0 bg-[#1F213A] h-full border border-[#1F213A] rounded-r-[25px] flex flex-col justify-between items-center">
        <div className="border border-[#7C5DF9] bg-[#7C5DF9] rounded-tr-[25px] py-[20px] px-[35px]">
          <Logo />
        </div>
        <div className="flex flex-col items-center py-[6px] space-y-2 ">
          <span className=" px-[35px] py-[20px] hover:bg-[#252945] ">
            <IconSun />
          </span>

          <span className="h-[50px] w-[50px] border rounded-full p-[7px] bg-[white]">
            <img src={AvatarImg} alt="" />
          </span>
        </div>
      </div>
      <div className="flex flex-col  gap-4 max-w[700px]  ">
        <div className="flex flex-row lg:justify-between md:justify-between items-center   py-[80px] text-white">
          <div className="flex flex-col ">
            <p className="text-[30px]">Invoice</p>
            <p>No Invoice</p>
          </div>
          <div className="flex flex-row gap-9 cursor-pointer ">
            <div className="flex flex-row gap-3 items-center border-1 rounded-full p-[9px] hover:bg-[#252945]">
              <span> Filter by status</span>

              <IconArrowDown className=" hover:animate-bounce" />
            </div>
            <div onClick={toggleSidebar} className="cursor-pointer">
              <div className="border-[1px] border-[#7C5DFA] bg-[#7C5DFA] p-[8px] rounded-[28px] flex flex-row gap-3 items-center hover:animate-pulse">
                <p className="border-[1px] rounded-full bg-white p-[3px] text-[#7C5DFA] items-center">
                  <IconPlus className="" />
                </p>
                <p> New Invoice</p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center px-[150px] ">
          <div>
            <img src={MessageImg} alt="" className="hover:animate-bounce" />
          </div>
          <div className="text">
            <div className="flex flex-col items-center gap-6">
              <p className="font-bold">There is Nothing here</p>
              <p className=" ">
                Create <b>Add Invoice</b> button to create <br /> an invoice and
                get started
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyInvoice;
