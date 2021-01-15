import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Contact.css";
import { Modal, Button, Input, Row, Col } from "antd";
import axios from "axios";
import {
  EditOutlined 
} from "@ant-design/icons";

const Contact = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const { setQuotes, fromAirport, destinationAirport, departureDate, returnDate, numberOfTravellers, name, transportation } = props;
  const iconstyle = { margin: '0 3px 0 -20px', fontSize: '1.25em' , color: '#5BBFBA'}


  const showModal = () => {
    setIsModalVisible(true);
  };

  const getQuotes = () => {
    axios.get('quotes')
    .then((response) => {
      setQuotes(response.data);
    })
    .catch((error) => {
      console.log('Error from getting quotes', error);
    });
  };

  const handleOk = () => {
    axios.post('/quotes', { fromAirport, destinationAirport, name, email, phone, transportation, departureDate, returnDate, numberOfTravellers})
    .then((response) => {
      setQuotes(response.data);
    })
    setTimeout(() => {
      getQuotes();
    }, 75);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const header = () => {
    return (
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
            <EditOutlined style={iconstyle}/>
              Please Enter Contact Info
            </div>
          </div>
        </Col>
      </Row>
    )
  }

  return (
    <>
      <Button type="primary" style={{ background: "#5BBFBA", borderColor: "#5BBFBA" }} shape="round" size='large' onClick={showModal}>
        Create a Quote
      </Button>
      <Modal
        title={header()}
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