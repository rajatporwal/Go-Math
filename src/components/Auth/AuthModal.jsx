import React from "react";
import { Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Auth from ".";
import { clearError, showModal } from "../../actions/commonActions";

const antIcon = <LoadingOutlined style={{ fontSize: 24, zIndex: 1 }} spin />;

const ModalContent = () => {
  const isLoading = useSelector((state) => state.appReducer.isLoading);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(showModal(false));
    dispatch(clearError());
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
