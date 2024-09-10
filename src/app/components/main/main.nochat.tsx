import React from "react";
import { Flex, Layout, Typography } from "antd";

type Props = {};

const { Content } = Layout;
const { Text, Title } = Typography;

const MainNoChat = (props: Props) => {
  return (
    <Flex align="center" justify="center" className="w-3/4 bg-white">
      <Flex vertical align="center" justify="space-evenly" className="w-1/2">
        <Title level={2}>Chào mừng đến với ChatWork!</Title>
        <Text>Cùng ChatWork khám phá những tiện ích hỗ trợ làm việc, cũng như để trò chuyện cùng với người thân, bạn bè đã được tối ưu hoá </Text>
      </Flex>
    </Flex>
  );
};

export default MainNoChat;
