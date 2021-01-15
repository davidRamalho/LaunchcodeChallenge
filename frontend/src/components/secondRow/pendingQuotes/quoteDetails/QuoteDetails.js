import React, { useState } from "react";
import "antd/dist/antd.css";
import "./QuoteDetails.css";
import { Modal, Row, Col } from "antd";
import {
  FullscreenOutlined, 
  UnorderedListOutlined, 
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
  const iconstyle = { margin: '0 3px 0 -20px', fontSize: '1.25em' , color: '#5BBFBA'}

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
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
            <UnorderedListOutlined style={iconstyle}/>
              Quote Details
            </div>
          </div>
        </Col>
      </Row>
    )
  }
  

  return (
    <>
      <FullscreenOutlined type="primary" style={{ background: '#A4D4AE', borderColor: "#5BBFBA" }} onClick={showModal}/>
      <Modal
        title= {header()}
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
            From Airport: 
            {airports.map(airport => {
              if (fromAirport === airport.id) {
                return ' ' + airport.name + ' ' + `(${airport.code})`;
              }
            })}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            Destination Airport: 
            {airports.map(airport => {
              if (destinationAirport === airport.id) {
                return ' ' + airport.name + ' ' + `(${airport.code})`;
              }
            })}
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