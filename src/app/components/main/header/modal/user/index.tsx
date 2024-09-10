"use client";

import {
  fetchDefaultAvatar,
  fetchDefaultBanner,
} from "@/app/utils/fetch/fetch.default";
import { CloseOutlined, EditOutlined, LeftOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  Image,
  Modal,
  Typography,
  Row,
  Col,
  Input,
  Radio,
  Select,
} from "antd";
import React, { useEffect, useRef, useState } from "react";
import UserInfo from "./modal.user.info";
import UserEdit from "./modal.user.edit";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ContentProps = {
  isEdit: boolean;
  switchContent: () => void;
};

const UserModal = ({ isOpen, setIsOpen }: Props) => {
  const [isEdit, setIsEdit] = useState(false);

  const closeModal = () => {
    setIsEdit(false);
    setIsOpen(false);
  };

  const openEdit = () => {
    setIsEdit(true);
  };

  const closeEdit = () => {
    setIsEdit(false);
  };

  return (
    <Modal
      open={isOpen}
      closable={false}
      width={400}
      footer={null}
      centered
      onCancel={closeModal}
      className="h-4/5 rounded overflow-hidden"
    >
      {/* Header */}
      <Flex align="center" justify="space-between" className="h-[10%] p-3">
        {!isEdit ? (
          <Typography className="font-bold text-lg">
            Thông tin tài khoản
          </Typography>
        ) : (
          <Flex align="center" gap="small">
            <Button
              type="text"
              icon={<LeftOutlined />}
              shape="circle"
              onClick={closeEdit}
            />
            <Typography className="font-bold text-lg">
              Cập nhật thông tin cá nhân
            </Typography>
          </Flex>
        )}
        <Button
          type="text"
          shape="circle"
          icon={<CloseOutlined />}
          onClick={closeModal}
        />
      </Flex>
      {/* End header */}

      {!isEdit ? (
        <UserInfo isEdit={isEdit} switchContent={openEdit} />
      ) : (
        <UserEdit isEdit={isEdit} switchContent={closeEdit} />
      )}
    </Modal>
  );
};

export default UserModal;
