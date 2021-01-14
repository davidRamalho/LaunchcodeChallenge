import React from 'react';
import './ContentGrid.css';
import { Row, Col } from 'antd';
import TopRow from '../topRow/TopRow'
import SecondRow from '../secondRow/SecondRow'
import ThirdRow from '../thirdRow/ThirdRow'
import BottomRow from '../bottomRow/BottomRow'

const ContentGrid = () => {
 
  return (
    <>
      <Row gutter={[8, 24]}>
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