import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Contact.css";
import { Modal, Button, Input } from "antd";
import axios from "axios";

const Contact = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const { setQuotes, fromAirport, destinationAirport, departureDate, returnDate, numberOfTravellers, name, transportation } = props;
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios.post('/quotes', { fromAirport, destinationAirport, name, email, phone, transportation, departureDate, returnDate, numberOfTravellers})
    .then(axios.get('/quotes')
    .then((response) => {
      setQuotes(response.data);
    }))
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
        <Input onChange={event => setEmail(event.target.value)} style={{ width: 200 }} placeholder="Email" />
        <Input onChange={event => setPhone(event.target.value)} style={{ width: 200 }} placeholder="Phone" />
      </Modal>
    </>
  );
};

export default Contact;