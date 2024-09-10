import { fetchDefaultAvatar, fetchDefaultBanner } from "@/app/utils/fetch/fetch.default";
import { EditOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Divider, Flex, Image, Row, Typography } from "antd";
import { ContentProps } from "./main.header.modal.user";

const UserInfo = ({ isEdit, switchContent }: ContentProps) => {
    return (
      <Flex vertical className={isEdit  ? "w-0" : "w-full"}>
        {/* Content */}
        <div className="w-full h-1/2">
          {/* Banner */}
          <Flex
            align="center"
            justify="center"
            className="h-48 w-full overflow-hidden"
          >
            <Image
              preview={false}
              alt="banner"
              className=""
              src={fetchDefaultBanner()}
            />
          </Flex>
          {/* End banner */}
  
          {/* Avatar - name */}
          <Flex gap="middle" className="h-24 p-3">
            {/* Avatar */}
            <div className="w-20 h-fit relative">
              <Avatar
                alt="avatar"
                shape="circle"
                size={80}
                src={fetchDefaultAvatar()}
                className="absolute -top-7 border border-2 border-white bg-gray-100"
              />
            </div>
            {/* End avatar */}
  
            {/* Name */}
            <Typography className="font-bold text-lg">Nguyễn Quốc Đạt</Typography>
            {/* End name */}
  
            {/* Edit button */}
            <Button
              className="bg-slate-200"
              type="text"
              shape="circle"
              icon={<EditOutlined />}
            />
            {/* End edit button */}
          </Flex>
  
          <Divider className="m-0" />
  
          {/* Personal information */}
          <Flex vertical gap="small" className="w-full p-3">
            {/* Title */}
            <Typography className="font-semibold text-lg">
              Thông tin cá nhân
            </Typography>
            {/* End title */}
  
            {/* Information grid */}
            {/* Gender */}
            <Row gutter={16}>
              <Col span={8}>
                <Typography className="text-gray-400">Giới tính</Typography>
              </Col>
              <Col span={16}>
                <Typography className="">Nam</Typography>
              </Col>
            </Row>
            {/* End gender */}
  
            {/* Date of birth */}
            <Row gutter={16}>
              <Col span={8}>
                <Typography className="text-gray-400">Ngày sinh</Typography>
              </Col>
              <Col span={16}>
                <Typography className="">20/12</Typography>
              </Col>
            </Row>
            {/* End date of birth */}
  
            {/* Phone number */}
            <Row gutter={16}>
              <Col span={8}>
                <Typography className="text-gray-400">Điện thoại</Typography>
              </Col>
              <Col span={16}>
                <Typography className="">123</Typography>
              </Col>
            </Row>
            {/* End phone number */}
            {/* End information grid */}
          </Flex>
  
          <Divider className="m-0" />
  
          {/* Edit button */}
          <div className="w-full p-3">
            <Button
              className="w-full rounded font-bold text-lg rounded"
              type="text"
              onClick={switchContent}
            >
              <EditOutlined />
              <Typography className="">Cập nhật</Typography>
            </Button>
          </div>
          {/* End edit button */}
        </div>
        {/* End content */}
      </Flex>
    );
  };

  export default UserInfo;