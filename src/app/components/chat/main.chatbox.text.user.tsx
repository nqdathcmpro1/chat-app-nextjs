import { Flex, Layout, Typography } from "antd";
import React from "react";

type Props = {};

const UserChatbox = (props: Props) => {
  return (
    <div className="bg-transparent flex flex-row-reverse w-full p-2">
      <div className="max-w-[70%] p-3 bg-white rounded shadow-md">
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </Typography>
      </div>
    </div>
  );
};

export default UserChatbox;
