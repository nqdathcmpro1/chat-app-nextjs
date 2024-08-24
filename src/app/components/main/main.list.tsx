"use client";

import {
  CloseCircleFilled,
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React, { ChangeEvent, ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
};

const MainList = ({ children }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDeleteSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="h-screen w-1/4 bg-white border-r-2 border-slate-300">
      <div className="w-full h-[10%] flex items-center gap-1 p-4">
        <div className="has-[:focus]:bg-white has-[:focus]:border border-blue-500 w-3/4 h-full rounded bg-slate-200 flex items-center justify-between p-2 gap-1">
          <button type="submit" className="w-1/12 outline-none">
            <SearchOutlined className="" />
          </button>
          <input
            value={searchValue}
            onChange={handleChangeSearch}
            id="search"
            name="search"
            placeholder="Find..."
            className={`${
              searchValue !== "" ? "w-10/12" : "w-11/12"
            } focus:outline-none peer-focus:bg-white bg-transparent`}
          />
          <button
            onClick={handleDeleteSearch}
            className={`${searchValue === "" && "hidden"} w-1/12`}
          >
            <CloseCircleFilled />
          </button>
        </div>
        <div className="w-1/4 flex items-center justify-evenly">
          <button className="p-2 rounded hover:bg-slate-200">
            <UserAddOutlined className="font-md" />
          </button>
          <button className="p-2 rounded hover:bg-slate-200">
            <UsergroupAddOutlined className="font-md" />
          </button>
        </div>
      </div>
      <div className="w-full h-[90%]">{children}</div>
    </div>
  );
};

export default MainList;
