import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from 'antd';
import './NewLeads.css';
import {
  MailOutlined,
  FullscreenOutlined, 
  UndoOutlined
} from "@ant-design/icons";

function NewLeads () {

  const style = { padding: '0px', margin: '5px 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
    <>
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
              <MailOutlined style={iconstyle}/>
              New Leads
            </div>
            <div className='icon-right'>
              <UndoOutlined  style={iconstyle}/>
              <FullscreenOutlined  style={iconstyle}/>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={style}/>
      <Row justify='end'>
        <Col span={6}><img alt='' className='leadsavatar' src='https://randomuser.me/api/portraits/thumb/women/51.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}>12:40 PM</Col>
      </Row>
      <Row justify='end'>
        <Col span={6}><img alt='' className='leadsavatar' src='https://randomuser.me/api/portraits/thumb/men/15.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}>12:40 PM</Col>
      </Row>
      <Row justify='end'>
        <Col span={6}><img alt='' className='leadsavatar' src='https://randomuser.me/api/portraits/thumb/men/11.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}>12:40 PM</Col>
      </Row>
      <Row justify='end'>
        <Col span={6}><img alt='' className='leadsavatar' src='https://randomuser.me/api/portraits/thumb/men/17.jpg'/></Col>
        <Col span={12}>Jane Smith</Col>
        <Col span={6}>12:40 PM</Col>
      </Row>
    </>
  );
}

export default NewLeads ;

