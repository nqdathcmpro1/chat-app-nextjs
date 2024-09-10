import { Button, Divider, Flex, Input, Radio, Select, Typography } from "antd";
import { ContentProps } from "./main.header.modal.user";

const UserEdit = ({ isEdit, switchContent }: ContentProps) => {
  return (
    <Flex vertical className={isEdit ? "w-full" : "w-0"}>
      {/* Header */}

      <Divider className="m-0" />
      <Flex vertical gap="large" className="w-full h-[22rem] p-3">
        <Flex vertical gap="small">
          <Typography>Tên hiển thị</Typography>
          <Input placeholder="Nhập tên hiển thị" className="w-full h-10" />
        </Flex>
        <Typography className="text-lg font-bold">
          Thông tin tài khoản
        </Typography>
        <Radio.Group>
          <Radio className="mr-8">Nam</Radio>
          <Radio className="">Nữ</Radio>
        </Radio.Group>

        <Flex vertical>
          <Typography>Ngày sinh</Typography>
          <Flex gap="small" className="w-full">
            <Select className="w-1/3 h-10" />
            <Select className="w-1/3 h-10" />
            <Select className="w-1/3 h-10" />
          </Flex>
        </Flex>
      </Flex>
      <Divider className="m-0" />
      <Flex align="center" justify="end" gap="small" className="p-3">
        <Button
          size="large"
          className="bg-gray-300 font-semibold"
          onClick={switchContent}
        >
          Huỷ
        </Button>
        <Button size="large" type="primary" className="font-semibold">
          Cập nhật
        </Button>
      </Flex>
      {/* End header */}
    </Flex>
  );
};

export default UserEdit;
