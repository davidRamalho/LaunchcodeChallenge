import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './PendingQuotes.css';

function PendingQuotes () {

  const style = { padding: '8px 0' };
    
  return (
    
    <Row gutter={[16, 16]}>
      <Col className="quick-quote" span={8}>
        <div style={style}>QUICK QUOTE</div>
      </Col>
      <Col className="pending-quote" span={8}>
        <div style={style}>PENDING QUOTES</div>
      </Col>
      <Col className="new-leads" span={8}>
        <div style={style}>NEW LEADS</div>
      </Col>
    </Row>
    
  );
}

export default PendingQuotes ;

