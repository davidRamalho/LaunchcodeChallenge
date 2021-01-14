import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from 'antd';
import './PendingQuotes.css';
import {
  HistoryOutlined,
  FullscreenOutlined, 
  UndoOutlined
} from "@ant-design/icons";

function PendingQuotes () {

  const style = { padding: '0px', margin: '0 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
    
  return (
    <Row >
      <Col span={24} >
        <div className='title'>
          <div className='title-left'>
            <HistoryOutlined style={iconstyle}/>
            Pending Quotes
          </div>
          <div className='icon-right'>
            <UndoOutlined  style={iconstyle}/>
            <FullscreenOutlined  style={iconstyle}/>
          </div>
        </div>
      </Col>
      <Divider style={style}/>
    </Row>
  );
}

export default PendingQuotes ;

