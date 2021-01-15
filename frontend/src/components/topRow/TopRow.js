import React from "react";
import "antd/dist/antd.css";
import { Row, Col } from 'antd';
import './TopRow.css';


function TopRow() {

  const style = { padding: '8px 0' };
  const style2 = { padding: '8px 10px' };  
  
  return (
    <div className="top" style={style}>
      <Row justify='start' gutter={[16, 16]}>
        <Col className="gutter-row" span={8}>
          <div className="welcome" style={style2}>Welcome to your dashboard</div>
          <div className="welcome-text" style={style2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada quam dui, vel posuere libero pretium sed. Fusce risus augue, malesuada et semper vitae, consequat a urna. Proin dictum eget quam a molestie. Donec at lacinia justo. Aliquam erat volutpat. Phasellus ut lacus nulla. Morbi mattis massa at urna sollicitudin suscipit. Donec ut sagittis ex, in ultricies lacus.</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <Row justify='end' gutter={[0, 16]}>
            <Col className="gutter-row" span={12}>
              <img className='contact-us-img' width='400' src={'/images/contactus.jpg'}></img>
            </Col>
          </Row>
          <Row justify='end' gutter={[8, 16]}>
            <Col className="gutter-row" span={4}><div style={style2}>LEADS</div></Col>
            <Col className="gutter-row" span={4}><div style={style2}>QUOTES</div></Col>
            <Col className="gutter-row" span={4}><div style={style2}>ORDERS</div></Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default TopRow;
