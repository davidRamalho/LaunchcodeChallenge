import React from 'react';
import './ContentGrid.css';
import { Row, Col } from 'antd';
import TopRow from '../topRow/TopRow'
import SecondRow from '../secondRow/SecondRow'
import ThirdRow from '../thirdRow/ThirdRow'
import BottomRow from '../bottomRow/BottomRow'

const style = { padding: '8px 0' };


const ContentGrid = () => {
 
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col className="gutter-row" span={24}>
          <TopRow/>
        </Col>
      </Row>
      
      <SecondRow/>
      
      <ThirdRow/>
      
      <BottomRow/>
    </>
  )
};

export default ContentGrid;