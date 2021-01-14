import React from "react";
import "antd/dist/antd.css";
import './TeamChat.css';
import { Row, Col, Divider } from 'antd';
import {
  WechatOutlined,
  MoreOutlined, 
  MessageFilled
} from "@ant-design/icons";

function TeamChat () {

  const style = { padding: '0px', margin: '0 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
    <>  
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
              <WechatOutlined style={iconstyle}/>
              Team Chat
            </div>
            <div className='icon-right'>
              <MoreOutlined  style={iconstyle}/>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={style}/>
      <Row justify='end'>
        <Col span={6}><img className='chatavatar' src='https://randomuser.me/api/portraits/thumb/women/51.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}><MessageFilled style={iconstyle}/></Col>
      </Row>
      <Row justify='end'>
        <Col span={6}><img className='chatavatar' src='https://randomuser.me/api/portraits/thumb/women/51.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}><MessageFilled style={iconstyle}/></Col>
      </Row>
      <Row justify='end'>
        <Col span={6}><img className='chatavatar' src='https://randomuser.me/api/portraits/thumb/women/51.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}><MessageFilled style={iconstyle}/></Col>
      </Row>
      <Row justify='end'>
        <Col span={6}><img className='chatavatar' src='https://randomuser.me/api/portraits/thumb/women/51.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}><MessageFilled style={iconstyle}/></Col>
      </Row>
    </>
  );
}

export default TeamChat ;


