"use client";

import {
  CloseCircleFilled,
  SearchOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import React, { ChangeEvent, ReactNode, useState } from "react";
import { Button, Flex, Input, Layout, Space, Tooltip } from "antd";

type Props = {
  children: ReactNode;
};

const { Content } = Layout;

const MainList = ({ children }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleDeleteSearch = () => {
    setSearchValue("");
  };

  return (
    <Content className="h-screen lg:min-w-96 min-w-full bg-white border-r-2 border-slate-300">
      <Flex align="center" gap="small" className="w-full h-[10%] p-4">
        <Flex
          gap={1}
          align="center"
          className="has-[:focus]:bg-white has-[:focus]:border border-blue-500 w-full h-full rounded bg-slate-200 p-2"
        >
          <Button
            className="w-1/12"
            type="text"
            size="small"
            icon={<SearchOutlined />}
          />
          <Flex align="center" className="w-11/12">
            <Input
              value={searchValue}
              onChange={handleChangeSearch}
              id="search"
              name="search"
              variant="borderless"
              placeholder="Find..."
              className={`${
                searchValue !== "" ? "w-11/12" : "w-full"
              } peer-focus:bg-white`}
            />
            <Button
              type="text"
              onClick={handleDeleteSearch}
              icon={<CloseCircleFilled />}
              className={`${searchValue === "" && "hidden"} w-1/12`}
            />
          </Flex>
        </Flex>
        
          <Tooltip title="Thêm bạn bè">
            <Button
              type="text"
              icon={<UserAddOutlined className="font-md" />}
            />
          </Tooltip>
          <Tooltip title="Tạo nhóm mới">
            <Button
              type="text"
              icon={<UsergroupAddOutlined className="font-md" />}
            />
          </Tooltip>
      </Flex>
      <Content className="w-full h-[90%]">{children}</Content>
    </Content>
  );
};

export default MainList;
