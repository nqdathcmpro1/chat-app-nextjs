import { Flex } from "antd";
import Link from "next/link";
import React, { MouseEventHandler, ReactElement } from "react";

type Props = {
  active: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  icon: ReactElement;
};

const HeaderButton = ({ active, onClick, icon }: Props) => {
  return (
    
      <Flex
        align="center"
        justify="center"
        onClick={onClick}
        className={`
      ${active ? "bg-blue-700" : "bg-transparent hover:bg-blue-600"}
        text-white text-2xl w-16 aspect-square cursor-pointer`}
      >
        {icon}
      </Flex>
  );
};

export default HeaderButton;
