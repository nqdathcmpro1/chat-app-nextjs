"use client";

import React, { useState } from "react";
import { Avatar, Layout } from "antd";
import MainList from "@/app/components/main/main.list";
import { CheckSquareOutlined } from "@ant-design/icons";
import { fetchDefaultAvatar } from "@/app/utils/fetch/fetch.default";
import MainChatBox from "@/app/components/chat/main.chatbox";

const Home = () => {
  const [isChooseAll, setIsChooseAll] = useState(true);

  return (
    <div className="w-full max-h-screen bg-slate-200 flex">
      <MainList>
        {/* Header Tab */}
        <div className="h-8 border-b-2 flex items-center justify-between px-4">
          <div className="w-2/3 flex gap-2">
            <div
              className={`${
                isChooseAll ? "text-sky-500" : "text-slate-500"
              } font-bold px-1`}
            >
              Tất cả
            </div>
            <div
              className={`${
                isChooseAll ? "text-slate-500" : "text-sky-500"
              } font-bold px-1`}
            >
              Chưa xem
            </div>
          </div>

          <button
            title="Đánh dấu đã đọc"
            className="p-1 aspect-square rounded-full hover:bg-slate-200"
          >
            <CheckSquareOutlined />
          </button>
        </div>
        {/* End Header Tab */}

        {/* Chat List */}
        <div className="w-full max-h-full overflow-y-auto flex flex-col">
          <div className="cursor-pointer w-full h-20 flex items-center justify-between p-3">
            <Avatar
              alt="avatar"
              src={fetchDefaultAvatar()}
              size={50}
              className="border bg-white border-slate-300"
            />
            <div className="w-64 flex flex-col gap-1">
              <div className="font-bold truncate">Đạt</div>
              <div className="truncate">
                Bạn: dadasdasdsafsdghjdfhjgsdfkjgsdasdasdasdasdas
              </div>
            </div>
          </div>

          <div className="w-full h-20 flex items-center justify-between p-3 bg-blue-100">
            <Avatar
              alt="avatar"
              src={fetchDefaultAvatar()}
              size={50}
              className="border bg-white border-slate-300"
            />
            <div className="w-64 flex flex-col gap-1">
              <div className="font-bold truncate">Đạt</div>
              <div className="truncate">
                Bạn: dadasdasdsafsdghjdfhjgsdfkjgsdasdasdasdasdas
              </div>
            </div>
          </div>
        </div>
        {/* End Chat List */}
      </MainList>

      <MainChatBox />
    </div>
  );
};

export default Home;
