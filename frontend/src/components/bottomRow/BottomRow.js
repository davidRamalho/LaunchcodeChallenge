import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './BottomRow.css';
import Revenue from './revenue/Revenue'
import PotentialRevenue from './potentialRevenue/PotentialRevenue'
import CloseRatios from './closeRatios/CloseRatios'

function BottomRow() {

  const style = { padding: '8px 0' };
    
  return (
    <Row gutter={[16, 16]} >
    <Col  span={8}>
      <div className='grid-items' style={style}>
        <Revenue />
      </div>
    </Col>
    <Col span={8}>
      <div className='grid-items' style={style}>
        <PotentialRevenue/>
      </div>
    </Col>
    <Col span={8}>
      <div className='grid-items' style={style}>
        <CloseRatios/>
      </div>
    </Col>
  </Row>
  );
}

export default BottomRow;
