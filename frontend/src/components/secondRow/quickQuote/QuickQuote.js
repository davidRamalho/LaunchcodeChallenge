import React, { useState } from "react";
import "antd/dist/antd.css";
import './QuickQuote.css';
import { Row, Col, Divider, Select, Button, Input, DatePicker } from 'antd';
import {
  ForwardOutlined,
  FullscreenOutlined
} from "@ant-design/icons";
import axios from 'axios'
import Contact from './contactInput/Contact'

function QuickQuote () {
  const { Option } = Select;
  const style = { padding: '0px', margin: '5px 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
  const searchStyle = { margin: '0 0 0 12px'}
  const [airports, setAirports] = useState(null);

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  const getAirports = () => {
    axios.get('airports')
    .then((response) => {
      setAirports(response.data);
    })
    .catch((error) => {
      console.log('Error from getting airports', error);
    });
  };
  
  if (airports === null) {
    getAirports();
  }
  
  const airportOptions = (airports) => {
    if (airports !== null) {
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
        <Col span={10} style={searchStyle}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="FROM"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {airportOptions(airports)}
          </Select>
        </Col>
        <Col span={10} style={searchStyle}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="DESTINATION"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
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
          <DatePicker placeholder="DEPARTURE DATE" style={{ height:50 , width: 200 }} onChange={onChange} />
        </Col>
        <Col span={10} style={searchStyle}>
          <DatePicker placeholder="RETURN DATE" style={{ height:50 , width: 200 }} onChange={onChange} />
        </Col>
      </Row>
      <Row gutter={[42, 24]}>
        <Col span={10} style={searchStyle}>
          <Input style={{ width: 200 }} placeholder="# TRAVELLERS (1, 2, etc)"/>
        </Col>
        <Col span={10} style={searchStyle}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="TRANSPORTATION"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
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
          <Input style={{ width: 200 }} placeholder="NAME"/>
        </Col>
        <Col span={10} style={searchStyle}>
          <div className='quote-button'>
            <Contact/>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default QuickQuote ;