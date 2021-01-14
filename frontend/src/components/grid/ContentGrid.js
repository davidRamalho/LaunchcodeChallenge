import React from 'react';
import './ContentGrid.css';
import { Row, Col } from 'antd';
import TopRow from '../topRow/TopRow'

const style = { padding: '8px 0' };


const ContentGrid = () => {
 
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={24}>
          <TopRow/>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={8}>
          <div style={style}>QUICK QUOTE</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>PENDING QUOTES</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>NEW LEADS</div>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={16}> 
          <div style={style}>POPULAR DESTINATIONS AND PACKAGES</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>TEAM CHAT</div>
        </Col>
      </Row>
      
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
    </>
  )
};

export default ContentGrid;