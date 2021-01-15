import React from 'react';
import './ContentGrid.css';
import { Row, Col } from 'antd';
import TopRow from '../topRow/TopRow'
import SecondRow from '../secondRow/SecondRow'
import ThirdRow from '../thirdRow/ThirdRow'
import BottomRow from '../bottomRow/BottomRow'

const ContentGrid = (props) => {
  const { airports, setAirports, quotes, setQuotes } = props
  return (
    <>
      <Row gutter={[8, 24]}>
        <Col className="gutter-row" span={24}>
          <TopRow/>
        </Col>
      </Row>
      
      <SecondRow 
        airports={airports}
        setAirports={setAirports}
        quotes={quotes}
        setQuotes = {setQuotes}
      />
      
      <ThirdRow/>
      
      <BottomRow/>
    </>
  )
};

export default ContentGrid;