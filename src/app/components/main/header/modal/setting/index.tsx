import {
  BellOutlined,
  CloseOutlined,
  HighlightOutlined,
  LockOutlined,
  MessageOutlined,
  SettingOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import { Button, Flex, Modal, Typography } from "antd";
import React, { useEffect, useState } from "react";
import GeneralSetting from "./modal.setting.general";
import PrivacySetting from "./modal.setting.privacy";
import AppearanceSetting from "./model.setting.appearance";
import NotificationSetting from "./modal.setting.notification";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingModal = ({ isOpen, setIsOpen }: Props) => {
  enum SettingList {
    General,
    Privacy,
    Appearance,
    Notification,
    Message,
    Extension,
  }

  const [setting, setSetting] = useState<SettingList>(SettingList.General);

  useEffect(() => {
    setSetting(SettingList.General);
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  const switchSettingModal = (setting: SettingList) => {
    switch (setting) {
      case SettingList.General:
        return <GeneralSetting />;
      case SettingList.Privacy:
        return <PrivacySetting />;
      case SettingList.Appearance:
        return <AppearanceSetting />;
      case SettingList.Notification:
        return <NotificationSetting />;
    }
  };

  return (
    <Modal
      open={isOpen}
      closable={false}
      width={800}
      height={650}
      footer={null}
      centered
      //onCancel={closeModal}
      className="h-11/12 rounded overflow-hidden bg-gray-100"
    >
      <Flex className="w-full h-screen">
        <Flex vertical className="w-1/4 h-full bg-white">
          <Typography.Title level={4} className="p-3">
            Cài đặt
          </Typography.Title>

          <Flex
            gap="small"
            className={`${
              setting == SettingList.General && "bg-blue-100"
            } px-3 py-2 cursor-pointer`}
            onClick={() => setSetting(SettingList.General)}
          >
            <SettingOutlined />
            <Typography.Text className="font-semibold">
              Cài đặt chung
            </Typography.Text>
          </Flex>
          <Flex
            gap="small"
            className={`${
              setting == SettingList.Privacy && "bg-blue-100"
            } px-3 py-2 cursor-pointer`}
            onClick={() => setSetting(SettingList.Privacy)}
          >
            <LockOutlined />
            <Typography.Text className="font-semibold">
              Quyền riêng tư
            </Typography.Text>
          </Flex>
          <Flex
            gap="small"
            className={`${
              setting == SettingList.Appearance && "bg-blue-100"
            } px-3 py-2 cursor-pointer`}
            onClick={() => setSetting(SettingList.Appearance)}
          >
            <HighlightOutlined />
            <Typography.Text className="font-semibold">
              Giao diện
            </Typography.Text>
          </Flex>
          <Flex
            gap="small"
            className={`${
              setting == SettingList.Notification && "bg-blue-100"
            } px-3 py-2 cursor-pointer`}
            onClick={() => setSetting(SettingList.Notification)}
          >
            <BellOutlined />
            <Typography.Text className="font-semibold">
              Thông báo
            </Typography.Text>
          </Flex>
          <Flex
            gap="small"
            className={`${
              setting == SettingList.Message && "bg-blue-100"
            } px-3 py-2 cursor-pointer`}
            onClick={() => setSetting(SettingList.Message)}
          >
            <MessageOutlined />
            <Typography.Text className="font-semibold">
              Tin nhắn
            </Typography.Text>
          </Flex>
          <Flex
            gap="small"
            className={`${
              setting == SettingList.Extension && "bg-blue-100"
            } px-3 py-2 cursor-pointer`}
            onClick={() => setSetting(SettingList.Extension)}
          >
            <SlidersOutlined />
            <Typography.Text className="font-semibold">
              Tiện ích
            </Typography.Text>
          </Flex>
        </Flex>
        <div className="w-3/4 max-h-full overflow-y-auto bg-gray-100 relative ">
          <Button
            type="text"
            shape="circle"
            className="absolute top-3 right-3 text-lg"
            icon={<CloseOutlined />}
            onClick={closeModal}
          />
          <div className="w-full max-h-[85%] overflow-y-auto mt-[5%] px-3">
            {switchSettingModal(setting)}
          </div>
        </div>
      </Flex>
    </Modal>
  );
};

export default SettingModal;
