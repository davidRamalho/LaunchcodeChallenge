import React, { useState } from "react";
import "antd/dist/antd.css";
import './QuickQuote.css';
import { Row, Col, Divider, Select, Input, DatePicker } from 'antd';
import {
  ForwardOutlined,
  FullscreenOutlined
} from "@ant-design/icons";
import axios from 'axios'
import Contact from './contactInput/Contact'

function QuickQuote (props) {
  const { Option } = Select;
  const style = { padding: '0px', margin: '5px 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
  const searchStyle = { margin: '0 0 0 12px'}
  const searchStyleTop = { margin: '20px 0 0 12px'}
  const [fromAirport, setFromAirport] = useState('');
  const [destinationAirport, setDestinationAirport] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numberOfTravellers, setNumberOfTravellers] = useState('');
  const [name, setName] = useState('');
  const [transportation, setTransportation] = useState('');
  const { airports, setAirports, setQuotes } = props; 

  const getAirports = () => {
    axios.get('airports')
    .then((response) => {
      setAirports(response.data);
    })
    .catch((error) => {
      console.log('Error from getting airports', error);
    });
  };
  
  if (airports.length === 0) {
    getAirports();
  }
  
  const airportOptions = (airports) => {
    if (airports.length !== 0) {
      return (
        <>
          {airports.map(airport => (
            <Option key={airport.id}>{airport.name + ' ' + `(${airport.code})`}</Option>
          ))}
        </>
      )
    }
  }

  return (
    <>
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
              <ForwardOutlined style={iconstyle}/>
              Quick Quote
            </div>
            <div className='icon-right'>
              <FullscreenOutlined  style={iconstyle}/>
            </div>
          </div>
        </Col>
        <Divider style={style}/>
      </Row>
      <Row gutter={[42, 24]}>
        <Col span={10} style={searchStyleTop}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="FROM"
            optionFilterProp="children"
            onChange={event => setFromAirport(event)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {airportOptions(airports)}
          </Select>
        </Col>
        <Col span={10} style={searchStyleTop}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="DESTINATION"
            optionFilterProp="children"
            onChange={event => setDestinationAirport(event)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {airportOptions(airports)}
          </Select>
        </Col>
      </Row>
      <Row gutter={[42, 24]}>
        <Col span={10} style={searchStyle}>
          <DatePicker placeholder="DEPARTURE DATE" style={{ height:50 , width: 200 }} onChange={event => setDepartureDate(event._d)} />
        </Col>
        <Col span={10} style={searchStyle}>
          <DatePicker placeholder="RETURN DATE" style={{ height:50 , width: 200 }} onChange={event => setReturnDate(event._d)} />
        </Col>
      </Row>
      <Row gutter={[42, 24]}>
        <Col span={10} style={searchStyle}>
          <Input onChange={event => setNumberOfTravellers(event.target.value)} style={{ width: 200 }} placeholder="# TRAVELLERS (1, 2, etc)"/>
        </Col>
        <Col span={10} style={searchStyle}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="TRANSPORTATION"
            optionFilterProp="children"
            onChange={event => setTransportation(event)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="rental car">rental car</Option>
            <Option value="limousine">limousine</Option>
            <Option value="taxi">taxi</Option>
            <Option value="other">other</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[42, 24]}>
        <Col span={10} style={searchStyle}>
          <Input onChange={event => setName(event.target.value)} style={{ width: 200 }} placeholder="NAME"/>
        </Col>
        <Col span={10} style={searchStyle}>
          <div className='quote-button'>
            <Contact
              setQuotes={setQuotes}
              fromAirport = {fromAirport}
              destinationAirport = {destinationAirport}
              departureDate = {departureDate}
              returnDate = {returnDate}
              numberOfTravellers = {numberOfTravellers}
              name = {name}
              transportation = {transportation}
            />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default QuickQuote ;