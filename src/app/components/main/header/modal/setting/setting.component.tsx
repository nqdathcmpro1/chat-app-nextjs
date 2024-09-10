import { Flex, Typography } from "antd";
import React, { ReactNode } from "react";

type Props = {
  title: string;
  description?: string;
  children: ReactNode;
};

const SettingComponent = ({ title, description, children }: Props) => {
  return (
    <Flex vertical className="w-full">
      <Flex gap="small" vertical className="px-3 py-2">
        <Typography className="text-lg font-semibold">{title}</Typography>
        <Typography className="text-gray-400 font-semibold text-xs">
          {description}
        </Typography>
      </Flex>
      <div className="w-full rounded bg-white p-4">
        {children}
        </div>
    </Flex>
  );
};

export default SettingComponent;
