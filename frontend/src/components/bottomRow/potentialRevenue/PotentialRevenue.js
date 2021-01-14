import React from "react";
import "antd/dist/antd.css";
import './PotentialRevenue.css';
import { Row, Col, Divider } from 'antd';
import {
  PieChartOutlined,
  MoreOutlined
} from "@ant-design/icons";

function PotentialRevenue() {

  const style = { padding: '0px', margin: '5px 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
    <>
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
              <PieChartOutlined  style={iconstyle}/>
              Potential Revenue
            </div>
            <div className='icon-right'>
              <MoreOutlined style={iconstyle}/>
            </div>
          </div>
        </Col>
      </Row>
      <Divider style={style}/>
      <Row>
        <Col span={24}>
          <img className='pieImg' alt='chart2' src={'/images/PieChart.png'}/>
        </Col>
      </Row>
    </>
  );
}

export default PotentialRevenue;
