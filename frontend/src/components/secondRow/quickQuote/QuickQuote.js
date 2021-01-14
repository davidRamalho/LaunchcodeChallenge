import React from "react";
import "antd/dist/antd.css";
import './QuickQuote.css';
import { Row, Col, Divider } from 'antd';
import {
  ForwardOutlined,
  FullscreenOutlined
} from "@ant-design/icons";

function QuickQuote () {

  const style = { padding: '0px', margin: '0 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
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
  );
}

export default QuickQuote ;

