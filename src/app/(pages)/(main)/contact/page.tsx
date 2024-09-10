"use client";
import React from "react";
import { Avatar, Button, Flex, Layout, Tooltip, Typography } from "antd";
import MainList from "@/app/components/main/main.list";
import MainChatBox from "@/app/components/chat/main.chatbox";
import { TeamOutlined, UserAddOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";
import ContactList from "@/app/components/contact/contact.list";

type Props = {};
const { Content } = Layout;

function Contact({}: Props) {
  return (
    <Content className="w-full max-h-screen bg-gray-200 flex">
      <MainList>
        <Flex vertical className="w-full ">
          <Flex gap="middle" align="center" className="p-5 bg-blue-100">
            <UserOutlined className="text-2xl font-bold" />
            <Typography className="font-bold">
              Danh sách bạn bè
            </Typography>
          </Flex>
          <Flex gap="middle" align="center" className="p-5">
            <TeamOutlined  className="text-2xl font-bold" />
            <Typography className="font-bold">
              Danh sách nhóm và cộng đồng
            </Typography>
          </Flex>
          <Flex gap="middle" align="center" className="p-5">
          <UserAddOutlined  className="text-2xl font-bold" />
            <Typography className="font-bold">
              Lời mời kết bạn
            </Typography>
          </Flex>
          <Flex gap="middle" align="center" className="p-5">
          <UsergroupAddOutlined  className="text-2xl font-bold" />
            <Typography className="font-bold">
              Lời mời nhóm và cộng đồng
            </Typography>
          </Flex>
        </Flex>
      </MainList>
      <ContactList />
      {/* <MainChatBox /> */}
    </Content>
  );
}

export default Contact;
