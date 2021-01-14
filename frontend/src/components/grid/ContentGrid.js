import React from 'react';
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

const ContentGrid = () => {
 
  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={16}>          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
      </Row>
      <Divider orientation="left">Vertical</Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-8</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  )
};

export default ContentGrid;