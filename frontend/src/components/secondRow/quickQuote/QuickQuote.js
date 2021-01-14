import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import {
  BellFilled,
} from "@ant-design/icons";
import './QuickQuote.css';

function QuickQuote () {

  const style = { padding: '8px 0' };
    
  return (
    
    <Row className = 'quick-quote' gutter={[16, 16]}>
      <Col className='title' icon={<BellFilled />}>Quick Quote</Col>
      <div className='expand' icon={<BellFilled />}></div>
    </Row>
    
  );
}

export default QuickQuote ;

