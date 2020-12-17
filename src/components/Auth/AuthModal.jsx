import React from "react";
import { Modal } from "antd";
import { useDispatch } from "react-redux";
import Auth from ".";
import { SHOW_MODAL } from "../../actions/types";

const ModalContent = () => {
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch({ type: SHOW_MODAL, value: false });
  };

  return (
    <>
      <Modal title="" visible={true} footer={null} onCancel={handleCancel}>
        <Auth />
      </Modal>
    </>
  );
};

export default ModalContent;
