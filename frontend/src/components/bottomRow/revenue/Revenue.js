import React from "react";
import "antd/dist/antd.css";
import './Revenue.css';
import { Row, Col, Divider } from 'antd';
import {
  BarChartOutlined,
  MoreOutlined
} from "@ant-design/icons";

function Revenue() {

  const style = { padding: '0px', margin: '0 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
    <Row >
      <Col span={24} >
        <div className='title'>
          <div className='title-left'>
            <BarChartOutlined style={iconstyle}/>
            Revenue
          </div>
          <div className='icon-right'>
            <MoreOutlined  style={iconstyle}/>
          </div>
        </div>
      </Col>
      <Divider style={style}/>
    </Row>
  );
}

export default Revenue;
