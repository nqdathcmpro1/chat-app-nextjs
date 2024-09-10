import { fetchDefaultAvatar } from "@/app/utils/fetch/fetch.default";
import {
  CloseCircleFilled,
  SearchOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Flex, Input, Layout, Select, Typography } from "antd";
import React, { ChangeEvent, useState } from "react";

type Props = {};

const { Content } = Layout;

const ContactList = (props: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Flex className="w-full h-full lg:flex hidden">
      {/* Chat Box */}
      <Content className={` h-full`}>
        {/* Chat box header */}
        <Flex
          align="center"
          justify="space-between"
          gap="middle"
          className="h-[10%] border-b-2 bg-white p-5"
        >
          <Flex align="center" gap="small" className="w-1/2 h-full">
            <UserOutlined className="text-2xl font-bold" />
            <Typography className="text-lg font-bold">
              Danh sách bạn bè
            </Typography>
          </Flex>
        </Flex>
        {/* End Chat box header */}

        {/* Chat box content */}
        <Flex vertical className="w-full h-[90%] overflow-y-auto px-3">
          <Typography className="font-bold py-5 h-[10%]">
            Bạn bè (23)
          </Typography>
          <Flex vertical className="w-full min-h-[90%] bg-white p-3 rounded-t">
            <Flex align="center" gap="small" className="w-full">
              <Flex gap="small" className="w-1/2 border px-2 rounded">
                <SearchOutlined />
                <Input
                  value={searchValue}
                  onChange={handleChangeSearch}
                  variant="borderless"
                  placeholder="Tìm bạn"
                />
                <Button
                  type="text"
                  icon={<CloseCircleFilled />}
                  className={`${searchValue === "" && "hidden"}`}
                />
              </Flex>

              <Select
                defaultValue="asc"
                variant="borderless"
                className="w-1/4 p-1 border bg-slate-200 rounded"
                // onChange={handleChange}
                options={[
                  {
                    value: "asc",
                    label: "Tên (A-Z)",
                    emoji: <SortAscendingOutlined />,
                  },
                  {
                    value: "desc",
                    label: "Tên (Z-A)",
                    emoji: <SortDescendingOutlined />,
                  },
                ]}
                optionRender={(option) => (
                  <Flex gap="small" className="bg-transparent">
                    {option.data.emoji}
                    {option.data.label}
                  </Flex>
                )}
              />
            </Flex>
          </Flex>
        </Flex>
        {/* End chat box content */}
      </Content>
      {/* End Chat Box */}
    </Flex>
  );
};

export default ContactList;
