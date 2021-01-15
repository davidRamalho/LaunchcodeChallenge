import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Contact.css";
import { Modal, Button, Input } from "antd";

const Contact = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" style={{ background: "#5BBFBA", borderColor: "#5BBFBA" }} shape="round" size='large' onClick={showModal}>
        Create a Quote
      </Button>
      <Modal
        title="Please Enter Contact Info"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input style={{ width: 200 }} placeholder="Email" />
        <Input style={{ width: 200 }} placeholder="Phone" />
      </Modal>
    </>
  );
};

export default Contact;