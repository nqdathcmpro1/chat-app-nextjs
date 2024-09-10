import React from "react";
import SettingComponent from "./setting.component";
import { Button, Checkbox, Flex, Select, Switch, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";

type Props = {};

const PrivacySetting = (props: Props) => {
  return (
    <Flex vertical gap="large" className="w-full h-full">
      <SettingComponent title="Cá nhân">
        <Flex vertical gap="small">
          <Flex align="center" justify="space-between" gap="middle">
            <Typography className="font-medium">Hiện ngày sinh</Typography>
            <Select className="w-32 h-10"></Select>
          </Flex>

          <Flex align="center" justify="space-between" gap="middle">
            <Typography className="font-medium">
              Hiển thị trạng thái đăng nhập
            </Typography>
            <Switch />
          </Flex>
        </Flex>
      </SettingComponent>

      <SettingComponent title="Tin nhắn và cuộc gọi">
        <Flex vertical gap="small">
          <Flex align="center" justify="space-between" gap="middle">
            <Typography className="font-medium">
              Hiện trang thái "đã xem"
            </Typography>
            <Switch />
          </Flex>

          <Flex align="center" justify="space-between" gap="middle">
            <Flex vertical>
              <Typography className="font-semibold">
                Cho phép nhắn tin
              </Typography>
              <Typography className="font-semibold text-xs text-gray-500">
                Ai được nhắn tin cho bạn
              </Typography>
            </Flex>
            <Select className="w-32 h-10"></Select>
          </Flex>

          <Flex align="center" justify="space-between" gap="middle">
            <Flex vertical>
              <Typography className="font-semibold">
                Cho phép gọi điện
              </Typography>
              <Typography className="font-semibold text-xs text-gray-500">
                Ai được gọi điện cho bạn
              </Typography>
            </Flex>
            <Select className="w-64 h-10"></Select>
          </Flex>
        </Flex>
      </SettingComponent>

      <SettingComponent title="Chặn tin nhắn">
        <Flex align="center" justify="space-between" gap="middle">
          <Typography className="font-semibold">Danh sách chặn</Typography>
          <Button shape="circle" type="text" icon={<RightOutlined />} />
        </Flex>
      </SettingComponent>

      <SettingComponent title="Nguồn tìm kiếm">
          <Flex align="center" justify="space-between" gap="middle">
            <Flex vertical>
              <Typography className="font-semibold">Cho phép người lạ tìm thấy và kết bạn qua số điện thoại</Typography>
              <Typography className="font-bold">+ (84) 123456789</Typography>
            </Flex>
            <Switch />
          </Flex>
      </SettingComponent>

      <SettingComponent title="Cho phép người lạ kết bạn">
        <Flex vertical gap="small">
          <Checkbox>Mã QR của tôi</Checkbox>
          <Checkbox>Nhóm chung</Checkbox>
          <Checkbox>Danh thiếp ChatWork</Checkbox>
          <Checkbox>Gợi ý "Có thể làm quen"</Checkbox>
        </Flex>
      </SettingComponent>
    </Flex>
  );
};

export default PrivacySetting;
