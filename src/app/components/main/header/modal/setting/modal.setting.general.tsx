import React from "react";
import SettingComponent from "./setting.component";
import { Flex, Radio, Select, Typography } from "antd";

type Props = {};

const GeneralSetting = (props: Props) => {
  return (
    <Flex vertical gap="large" className="w-full h-full ">
      <SettingComponent
        title="Danh bạ"
        description="Danh sách bạn bè được hiển thị trong danh bạ"
      >
        <Flex vertical gap="small">
          <Flex align="center" justify="space-between" gap="middle">
            <label htmlFor="showAll" className="font-medium">
              Hiển thị tất cả bạn bè
            </label>
            <input type="radio" id="showAll" />
          </Flex>
          <Flex align="center" justify="space-between" gap="middle">
            <label htmlFor="showFriend" className="font-medium">
              Chỉ hiển thị bạn bè đang sử dụng ChatWork
            </label>
            <input type="radio" id="showFriend" />
          </Flex>
        </Flex>
      </SettingComponent>

      <SettingComponent title="Ngôn ngữ">
        <Flex align="center" justify="space-between" gap="middle">
          <Typography className="font-medium">Thay đổi ngôn ngữ</Typography>
          <Select className="w-32 h-10"></Select>
        </Flex>
      </SettingComponent>
    </Flex>
  );
};

export default GeneralSetting;
