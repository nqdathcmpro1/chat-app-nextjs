"use client";

import { fetchDefaultAvatar } from "@/app/utils/fetch/fetch.default";
import { Avatar, Dropdown, Flex, MenuProps, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import HeaderButton from "./main.header.button";
import {
  ContactsOutlined,
  LogoutOutlined,
  MessageFilled,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import UserModal from "./modal/user";
import SettingModal from "./modal/setting";


const { Sider } = Layout;

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpenUserModal, setIsOpenUserModal] = useState(false);
  const [isOpenSettingModal, setIsOpenSettingModal] = useState(false);

  const openUserModal = () => {
    setIsOpenUserModal(true);
  }

  const openSettingModal = () => {
    setIsOpenSettingModal(true);
  }

  const handleNavigate = (pathname: string) => {
    router.push(pathname);
  };

  useEffect(() => {
    setIsOpenUserModal(false)
  },[])

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Flex gap="small" className="w-48 py-2" onClick={openUserModal}>
          <UserOutlined />
          <Typography>Thông tin tài khoản</Typography>
        </Flex>
      ),
    },
    {
      key: "2",
      label: (
        <Flex gap="small" className="w-48 py-2" onClick={openSettingModal}>
          <SettingOutlined />
          <Typography>Cài đặt</Typography>
        </Flex>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "3",
      label: (
        <Flex gap="small" className="w-48 py-2 text-red-500">
          <LogoutOutlined />
          <Typography className="text-red-500">Đăng xuất</Typography>
        </Flex>
      ),
    },
  ];

  return (
    <>
      <div className="h-dvh w-16 bg-zalo-blue flex flex-col px-1 pt-8 items-center justify-between">
        {/* Top Buttons */}
        <Flex vertical align="center" className="h-2/5 w-full">
          <Avatar
            size={50}
            shape="circle"
            alt="Avatar"
            src={fetchDefaultAvatar()}
            className="border bg-gray-100 border-white mb-5"
          />
          <HeaderButton
            active={pathname == "/"}
            onClick={() => handleNavigate("/")}
            icon={<MessageFilled />}
          />
          <HeaderButton
            active={pathname == "/contact"}
            onClick={() => handleNavigate("/contact")}
            icon={<ContactsOutlined />}
          />
        </Flex>
        {/* End Top Buttons */}

        {/* Bottom Buttons */}
        <Flex
          vertical
          align="center"
          justify="flex-end"
          className="relative h-2/5 w-full"
        >
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="topLeft"
            className="z-1"
          >
            <div>
              <HeaderButton
                active={false}
                onClick={() => handleNavigate("")}
                icon={<SettingOutlined />}
              />
            </div>
          </Dropdown>
        </Flex>
        {/* End Bottom Buttons */}
      </div>

      {/* User modaal */}
      <UserModal isOpen={isOpenUserModal} setIsOpen={setIsOpenUserModal} />
      <SettingModal isOpen={isOpenSettingModal} setIsOpen={setIsOpenSettingModal} />
    </>


  );
};

export default Header;
