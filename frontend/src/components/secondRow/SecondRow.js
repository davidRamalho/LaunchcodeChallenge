import React, { useState }from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import QuickQuote from './quickQuote/QuickQuote'
import PendingQuotes from './pendingQuotes/PendingQuotes'
import NewLeads from './newLeads/NewLeads'
import './SecondRow.css';

function SecondRow () {
  const [quotes, setQuotes] = useState(null);
  const [airports, setAirports] = useState(null);
  const style = { background: "white", padding: '8px 0' };
    
  return (
    
    <Row gutter={[16, 16]} >
      <Col span={8}>
        <div className='grid-items' style={style}>
          <QuickQuote 
            airports = {airports}
            setAirports = {setAirports}
            setQuotes={setQuotes}
          />
        </div>
      </Col>
      <Col span={8}>
        <div className='grid-items' style={style}>
          <PendingQuotes
            airports = {airports}
            setQuotes={setQuotes}
            quotes={quotes}
          />
        </div>
      </Col>
      <Col span={8}>
        <div className='grid-items' style={style}>
          <NewLeads/>
        </div>
      </Col>
    </Row>
  );
}

export default SecondRow ;

