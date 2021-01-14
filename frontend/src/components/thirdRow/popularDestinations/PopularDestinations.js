import React from "react";
import "antd/dist/antd.css";
import './PopularDestinations.css';
import { Row, Col, Divider, Progress } from 'antd';
import {
  SendOutlined,
  MoreOutlined
} from "@ant-design/icons";

function PopularDestinations () {

  const style = { padding: '0px', margin: '5px 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
    <>
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
              <SendOutlined style={iconstyle}/>
              Popular Destinations
            </div>
            <div className='icon-right'>
              <MoreOutlined  style={iconstyle}/>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={style}/>
      <Row gutter={24}>
        <Col span={8}>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={80} strokeColor='green' size="medium" showInfo={false}/>
          </div>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={30} strokeColor='orange' size="medium" showInfo={false}/>
          </div >
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={40} strokeColor='red' size="medium" showInfo={false}/>
          </div>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={90} strokeColor='teal' size="medium" showInfo={false}/>
          </div>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={60} strokeColor='pink' size="medium" showInfo={false}/>
          </div>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={100} strokeColor='green' size="medium" showInfo={false}/>
          </div>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={70} strokeColor='purple' size="medium" showInfo={false}/>
          </div>
          <div className='bar'>
            <div className='bartext'> Lorem ipsum dolor sit </div>
            <Progress percent={25} size="medium" showInfo={false}/>
          </div>
        </Col>
        <Col span={16}>
          <img className='destinations' src={'/images/destinations.png'}/>
        </Col>
      </Row>
    </>
  );
}

export default PopularDestinations;