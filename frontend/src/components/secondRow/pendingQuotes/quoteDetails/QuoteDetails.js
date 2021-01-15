import React, { useState } from "react";
import "antd/dist/antd.css";
import "./QuoteDetails.css";
import { Modal, Row, Col } from "antd";
import {
  FullscreenOutlined 
} from "@ant-design/icons";

const Contact = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { 
    airports,
    id,
    name,
    departureDate,
    returnDate,
    transportation,
    destinationAirport,
    fromAirport,
    numberOfTravellers,
    phone, 
    email
  } = props;

  const displayDepartureDate = departureDate.split('T')[0];
  const displayReturnDate = returnDate.split('T')[0];

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
      <FullscreenOutlined type="primary" style={{ background: '#A4D4AE', borderColor: "#5BBFBA" }} onClick={showModal}/>
      <Modal
        title="Quote Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Row>
          <Col span={24}>
            Quote ID#: {id}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            From Airport: {fromAirport}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Destination Airport: {destinationAirport}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Customer Name: {name}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Customer E-mail: {email}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Customer Phone: {phone}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Departure Date: {displayDepartureDate}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Return Date: {displayReturnDate}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Transportation: {transportation}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Number of Travellers: {numberOfTravellers}
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Contact;