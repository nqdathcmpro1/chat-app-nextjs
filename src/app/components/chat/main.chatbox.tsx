"use client";

import { fetchDefaultAvatar } from "@/app/utils/fetch/fetch.default";
import {
  BellOutlined,
  CaretDownOutlined,
  CaretRightOutlined,
  EditOutlined,
  FileImageOutlined,
  FormOutlined,
  IdcardOutlined,
  LikeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PaperClipOutlined,
  PushpinOutlined,
  RobotOutlined,
  SearchOutlined,
  SmallDashOutlined,
  SmileOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Flex,
  Grid,
  Input,
  Layout,
  Row,
  Space,
  Tooltip,
  Typography,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import UserChatbox from "./main.chatbox.text.user";
import FriendChatbox from "./main.chatbox.text.friend";

type Props = {};

const { Content } = Layout;

const MainChatBox = (props: Props) => {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  const [isOpenImage, setIsOpenImage] = useState(true);

  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView();
}, [])

  const handleToggleState = (
    setStateToggle: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setStateToggle((prev) => !prev);
  };

  return (
    <Flex className="w-full lg:flex hidden h-full">
      {/* Chat Box */}
      <Content className={`${!isOpenInfo ? "w-full" : "w-3/4"} h-full`}>
        {/* Chat box header */}
        <Flex
          align="center"
          justify="space-between"
          gap="middle"
          className="h-[10%] border-b-2 bg-white p-5"
        >
          <Flex align="center" gap="small" className="w-1/2 h-full">
            <Avatar
              className="bg-gray-100"
              shape="circle"
              size={50}
              src={fetchDefaultAvatar()}
              alt="avatar"
            />
            <Flex vertical className="w-2/3">
              <Typography className="font-bold text-lg truncate">
                Nguyễn Quốc Đạt
              </Typography>
              <Typography className="text-sm text-slate-400">
                Đang hoạt động
              </Typography>
            </Flex>
          </Flex>

          <Flex align="center" justify="end" gap="small" className="w-1/3">
            <Tooltip title="Thêm bạn vào trò chuyện">
              <Button type="text" icon={<UsergroupAddOutlined />} />
            </Tooltip>
            <Tooltip title="Tim kiếm tin nhắn">
              <Button type="text" icon={<SearchOutlined />} />
            </Tooltip>
            <Tooltip title="Cuộc gọi video">
              <Button type="text" icon={<VideoCameraOutlined />} />
            </Tooltip>
            <Tooltip placement="bottomLeft" title="Thông tin hội thoại">
              <Button
                onClick={() => handleToggleState(setIsOpenInfo)}
                type="text"
                icon={
                  !isOpenInfo ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                }
              />
            </Tooltip>
          </Flex>
        </Flex>
        {/* End Chat box header */}

        {/* Chat box content */}
        <Flex vertical className="w-full h-[78%] overflow-y-auto p-3">
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <FriendChatbox />
          <UserChatbox />
          <UserChatbox />
          <FriendChatbox />
          <div ref={chatRef} />
        </Flex>
        {/* End chat box content */}

        {/* Chat input */}
        <Flex vertical className="w-full h-[12%] bg-white">
          <Flex align="center" gap="small" className="w-full h-1/2 p-1">
            <Tooltip title="Gửi Sticker">
              <Button type="text" icon={<RobotOutlined />} />
            </Tooltip>

            <Tooltip title="Gửi hình ảnh">
              <Button type="text" icon={<FileImageOutlined />} />
            </Tooltip>

            <Tooltip title="Đính kèm File">
              <Button type="text" icon={<PaperClipOutlined />} />
            </Tooltip>

            <Tooltip title="Gửi danh thiếp">
              <Button type="text" icon={<IdcardOutlined />} />
            </Tooltip>

            <Tooltip title="Định dạng tin nhắn">
              <Button type="text" icon={<FormOutlined />} />
            </Tooltip>

            <Tooltip title="Xem thêm">
              <Button type="text" icon={<SmallDashOutlined />} />
            </Tooltip>
          </Flex>
          <Divider className="p-0 m-0 bg-blue-700" />
          <Flex align="center" gap="small" className="w-full h-1/2 p-2">
            <Input variant="borderless" placeholder="Nhập @, tin nhắn tới Nguyễn Quốc Đạt" /> 

            <Tooltip autoAdjustOverflow title="Gửi nhãn dán">
              <Button type="text" icon={<SmileOutlined />} />
            </Tooltip>

            <Tooltip destroyTooltipOnHide placement="topLeft" title="Gửi biểu tượng cảm xúc">
              <Button type="text" icon={<LikeOutlined />} />
            </Tooltip>
          </Flex>
        </Flex>
        {/* End chat input */}
      </Content>
      {/* End Chat Box */}





      {/* Chat Infomation */}
      <Content className={`${!isOpenInfo && "hidden"} w-1/4 h-full`}>
        <Content className="h-[10%] border border-t-0 border-r-0 bg-white flex items-center justify-center">
          <Typography className="font-bold text-lg ">
            Thông tin hội thoại
          </Typography>
        </Content>

        <Space
          direction="vertical"
          size="small"
          className="w-full max-h-[90%] overflow-y-auto"
        >
          {/* Infomation Tab */}
          <Flex
            vertical
            align="center"
            justify="center"
            gap="middle"
            className="w-full h-64 bg-white p-2"
          >
            <Avatar
              className="border bg-white border-slate-500"
              alt="avatar"
              src={fetchDefaultAvatar()}
              shape="circle"
              size={80}
            />
            <Flex gap="small" align="center">
              <Typography className="font-bold truncate">
                Nguyễn Quóc Đạt
              </Typography>
              <Button
                type="text"
                className="w-8 bg-gray-300"
                shape="circle"
                icon={<EditOutlined />}
              />
            </Flex>
            <Row justify="space-evenly" align="top" className="w-full h-16">
              <Col span={6}>
                <Flex vertical align="center">
                  <Button
                    type="text"
                    shape="circle"
                    className=" bg-gray-300"
                    icon={<BellOutlined />}
                  />
                  <Typography className="text-xs text-slate-400 text-center">
                    Tắt thông báo
                  </Typography>
                </Flex>
              </Col>
              <Col span={6}>
                <Flex vertical align="center">
                  <Button
                    type="text"
                    shape="circle"
                    className=" bg-gray-300"
                    icon={<PushpinOutlined />}
                  />

                  <Typography className="text-xs text-slate-400 text-center">
                    Ghim hội thoại
                  </Typography>
                </Flex>
              </Col>
              <Col span={6}>
                <Flex vertical align="center">
                  <Button
                    type="text"
                    shape="circle"
                    className=" bg-gray-300"
                    icon={<UsergroupAddOutlined />}
                  />

                  <Typography className="text-xs text-slate-400 text-center">
                    Tạo nhóm trò chuyện
                  </Typography>
                </Flex>
              </Col>
            </Row>
          </Flex>
          {/* End Tab Infomation */}

          {/* Tab Images */}
          <Flex vertical className="w-full max-h-64 bg-white">
            <Flex
              align="center"
              justify="space-between"
              className="w-full h-[20%] p-2"
            >
              <Typography className="font-bold">Ảnh/Video</Typography>
              <Button
                type="text"
                shape="circle"
                icon={
                  isOpenImage ? <CaretDownOutlined /> : <CaretRightOutlined />
                }
                onClick={() => handleToggleState(setIsOpenImage)}
              />
            </Flex>
            <Layout className="w-full max-h-[80%] p-2 grid"></Layout>
          </Flex>
          {/* End Tab Images */}
        </Space>
      </Content>
      {/* End Chat Infomation */}
    </Flex>
  );
};

export default MainChatBox;
