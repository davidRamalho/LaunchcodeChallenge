import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './TeamChat.css';

function TeamChat () {

  const style = { padding: '8px 0' };
    
  return (
    <Row gutter={[16, 16]}>
      <Col className="gutter-row" span={16}> 
        <div style={style}>POPULAR DESTINATIONS AND PACKAGES</div>
      </Col>
      <Col className="gutter-row" span={8}>
        <div style={style}>TEAM CHAT</div>
      </Col>
    </Row>
  );
}

export default TeamChat ;


