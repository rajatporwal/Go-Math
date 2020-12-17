import React from "react";
import { Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Auth from ".";
import { SHOW_MODAL } from "../../actions/types";
import { showModal } from "../../actions/commonActions";

const antIcon = <LoadingOutlined style={{ fontSize: 24, zIndex: 1 }} spin />;

const ModalContent = () => {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(showModal(false));
  };

  return (
    <>
      <Modal title="" visible={true} footer={null} onCancel={handleCancel}>
        <Spin indicator={antIcon} spinning={isLoading}>
          <Auth />
        </Spin>
      </Modal>
    </>
  );
};

export default ModalContent;
