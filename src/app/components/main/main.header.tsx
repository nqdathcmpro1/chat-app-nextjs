"use client";

import { fetchDefaultAvatar } from "@/app/utils/fetch/fetch.default";
import { Avatar } from "antd";
import React from "react";
import { usePathname } from "next/navigation";
import HeaderButton from "./main.header.button";
import {
  ContactsOutlined,
  MessageFilled,
  SettingOutlined,
} from "@ant-design/icons";

const Header = () => {
  const pathname = usePathname();

  return (
    // Container
    <div className="h-dvh w-16 bg-sky-500 flex flex-col px-1 pt-10 items-center justify-between">
      {/* Top Buttons */}
      <div className="h-2/5 w-full flex flex-col items-center">
        <Avatar
          size={50}
          shape="circle"
          alt="Avatar"
          src={fetchDefaultAvatar()}
          className="border bg-white border-white mb-3"
        />
        <HeaderButton
          active={pathname == "/"}
          href="/"
          icon={<MessageFilled />}
        />
        <HeaderButton
          active={pathname == "/contact"}
          href="/contact"
          icon={<ContactsOutlined />}
        />
      </div>
      {/* End Top Buttons */}

      {/* Bottom Buttons */}
      <div className="h-2/5 w-full flex flex-col items-center justify-end">
        <HeaderButton
          active={pathname == "/setting"}
          href="/setting"
          icon={<SettingOutlined />}
        />
      </div>
      {/* End Bottom Buttons */}
    </div>
    // End Container
  );
};

export default Header;
