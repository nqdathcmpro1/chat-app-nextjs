"use client";

import React, { useState } from "react";
import { Avatar, Button, Flex, Layout, Tooltip, Typography } from "antd";
import MainList from "@/app/components/main/main.list";
import { CheckSquareOutlined } from "@ant-design/icons";
import { fetchDefaultAvatar } from "@/app/utils/fetch/fetch.default";
import MainChatBox from "@/app/components/chat/main.chatbox";
import MainNoChat from "@/app/components/main/main.nochat";

const { Content } = Layout;

const Home = () => {
  const [isChooseAll, setIsChooseAll] = useState(true);

  return (
    <Flex className="w-full max-h-screen bg-gray-200">
      <MainList>
        {/* Header Tab */}
        <Flex
          align="center"
          justify="space-between"
          className="h-8 border-b-2 px-4"
        >
          <Flex gap="middle" className="w-2/3">
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
          </Flex>
          <Tooltip title="Đánh dấu đã đọc">
            <Button type="text" shape="circle" icon={<CheckSquareOutlined />} />
          </Tooltip>
        </Flex>
        {/* End Header Tab */}

        {/* Chat List */}
        <Flex vertical className="w-full max-h-full overflow-y-auto">
          <Flex
            align="center"
            gap="middle"
            className="cursor-pointer w-full h-20 p-3"
          >
            <Avatar
              alt="avatar"
              src={fetchDefaultAvatar()}
              size={50}
              className="border bg-white border-slate-300 w-1/4"
            />
            <Flex vertical gap="small" className="w-3/4">
              <Typography className="font-bold truncate">Đạt</Typography>
              <Typography className="truncate">
                Bạn: dadasdasdsafsdghjdfhjgsdfkjgsdasdasdasdasdas
              </Typography>
            </Flex>
          </Flex>

          <Flex
            align="center"
            gap="middle"
            className="w-full h-20 p-3 bg-blue-100"
          >
            <Avatar
              alt="avatar"
              src={fetchDefaultAvatar()}
              size={50}
              className="w-1/4 border bg-white border-slate-300"
            />
            <Flex vertical gap="small" className="w-3/4">
              <Typography className="font-bold truncate">Đạt</Typography>
              <Typography className="truncate">
                Bạn: dadasdasdsafsdghjdfhjgsdfkjgsdasdasdasdasdas
              </Typography>
            </Flex>
          </Flex>
        </Flex>
        {/* End Chat List */}
      </MainList>

      <MainChatBox />
      {/* <MainNoChat /> */}
    </Flex>
  );
};

export default Home;
