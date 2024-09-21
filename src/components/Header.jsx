import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="md:static p-4 shadow-sm border flex justify-between items-between">
      <div className="flex flex-row gap-2 font-bold text-2xl text-purple-700">
        <img
          src={logo}
          alt="logo"
          height={20}
          width={40}
          className="cursor-pointer"
        />
        <div className="text-2xl font-bold text-purple-800 px-2 content-center">
          LogoCraft
        </div>
      </div>

      <Button className="flex gap-2 items-center">
        <Download className="h-4 w-4" />
        <div className="text-[16px] font-semibold">Download</div>
      </Button>
    </div>
  );
};

export default Header;
