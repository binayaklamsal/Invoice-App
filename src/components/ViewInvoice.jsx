import React from "react";
import { IconArrowLeft, IconSun, Logo } from "../assets/icons/icons";
import AvatarImg from "../assets/images/avatar.png";
import { Link } from "react-router-dom";

const ViewInvoice = () => {
  return (
    <div className="h-screen  bg-[#141625] flex flex-row items-center gap-[200px] ">
      <div className=" text w-[100px] left-0 top-0 bg-[#141625] h-screen border border-[#1F213A] rounded-r-[25px] flex flex-col justify-between items-center">
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
      <div>
        <Link to="/invoicelist">
        <button className="text-white mb-3 flex flex-row gap-2 items-center">
          <IconArrowLeft /> <p>Go Back</p>
        </button>
        </Link>
        <div className="text-white flex flex-col justify-between gap-[50px] w-[600px] h-[550px]">
          <div className="bg-[#1F213A] h-[90px] flex flex-row justify-between items-center px-5 border-[#1F213A] rounded-md ">
            <button className="text-sm border py-2 px-4 bg-[#252946] rounded-full  border-[#252946] hover:bg-[#7C5DF9]  transition-colors duration-300">
              Edit
            </button>
            <button className="text-sm border py-2 px-4 bg-[#ED5758] rounded-full text-white border-[#ED5758] hover:bg- hover:text-[#1F213A] transition-colors duration-300">
              Delete
            </button>
          </div>
          <div className="w-auto h-[490px] bg-[#1F213A] border-[#1F213A] rounded-md">
            <div className=" flex flex-row justify-between ">
              <div className="w-[100px] h-[100px] flex p-4 flex-col items-center border">
                <p>sn</p>
                <p>project dec</p>
              </div>
              <div className="w-[100px] h-[100px] flex  flex-col items-center border">
                <p>stadd</p>
                <p>city1</p>
                <p>postcode1</p>
                <p>country1</p>
              </div>
            </div>
            <div>
              <div className=" w-[100px] h-[200px] flex p-4 flex-col items-center border ">
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
