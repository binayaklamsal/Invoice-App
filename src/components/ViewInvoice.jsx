import React from "react";
import { IconArrowDown, IconPlus, IconSun, Logo } from "../assets/icons/icons";
import AvatarImg from "../assets/images/avatar.png";

const ViewInvoice = () => {
  return (
    <div className="h-screen  bg-[#141625] flex flex-row   ">
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
      <div className="text-white">Hello</div>
    </div>
  );
};

export default ViewInvoice;
