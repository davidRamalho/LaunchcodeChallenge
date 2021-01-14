import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './ThirdRow.css';
import PopularDestinations from './popularDestinations/PopularDestinations'
import TeamChat from './teamChat/TeamChat'

function ThirdRow () {

  const style = { padding: '8px 0' };
    
  return (
    <Row gutter={[16, 16]}>
      <Col span={16}> 
        <div className='grid-items' style={style}>
          <PopularDestinations/>
        </div>
      </Col>
      <Col span={8}> 
        <div className='grid-items' style={style}>
          <TeamChat/>
        </div>
      </Col>
    </Row>
  );
}

export default ThirdRow ;


