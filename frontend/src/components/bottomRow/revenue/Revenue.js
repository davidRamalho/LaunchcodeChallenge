import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './Revenue.css';

function Revenue() {

  const style = { padding: '8px 0' };
    
  return (
    <Row gutter={[16, 16]}>
      <Col className="gutter-row" span={8}>
        <div style={style}>REVENUE</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>POTENTIAL REVENUE</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>CLOSE RATIOS</div>
      </Col>
    </Row>
  );
}

export default Revenue;
