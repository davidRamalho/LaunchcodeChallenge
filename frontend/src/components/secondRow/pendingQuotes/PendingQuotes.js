import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from 'antd';
import './PendingQuotes.css';
import {
  HistoryOutlined,
  FullscreenOutlined, 
  UndoOutlined
} from "@ant-design/icons";
import axios from 'axios'
import QuoteDetails from './quoteDetails/QuoteDetails'

function PendingQuotes (props) {

  const style = { padding: '0px', margin: '5px 0 5px'};
  const quoteStyle = { padding: '0px', margin: '0 0 0 1em'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
  const { airports, quotes, setQuotes } = props;
  console.log(quotes)

  const getQuotes = () => {
    axios.get('quotes')
    .then((response) => {
      setQuotes(response.data);
    })
    .catch((error) => {
      console.log('Error from getting quotes', error);
    });
  };
  
  if (quotes === null) {
    getQuotes();
  }

  const quotesList = (quotes) => {
    if (quotes !== null) {
      return (
        <>
          <Row>
            <Col style={quoteStyle} span={2}>
              ID#
            </Col>
            <Col span={5}>
              NAME
            </Col>
            <Col span={8}>
              DESTINATION AIRPORT CODE
            </Col>
            <Col span={6}>
              EMAIL
            </Col>
            <Col span={1}>
              INFO
            </Col>
          </Row>
          <Divider style={style}/>
          {quotes.map(quote => (
            <>
              <Row>
                <Col style={quoteStyle} span={2}>
                  {quote.id}
                </Col>
                <Col span={5}>
                  {quote.name}
                </Col>
                <Col span={8}>
                  {airports.map(airport => {
                    if (quote.destination_airport_id === airport.id) {
                      return airport.code;
                    }
                  })}
                </Col>
                <Col span={6}>
                  {quote.email}
                </Col>
                <Col span={1}>
                  <QuoteDetails
                    airports = {airports}
                    id = {quote.id}
                    name = {quote.name}
                    departureDate = {quote.departure_date}
                    returnDate = {quote.return_date}
                    transportation = {quote.transportation}
                    destinationAirport = {quote.destination_airport_id}
                    fromAirport = {quote.from_airport_id}
                    numberOfTravellers = {quote.number_of_travellers}
                    phone = {quote.phone}
                    email = {quote.email}
                  />
                </Col>
              </Row>
              <Divider style={style}/>
            </>
          ))}
        </>
      )
    }
  }

  return (
    <>
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
      </Row>
      <Divider style={style}/>
     {quotesList(quotes)}
    </>
  );
}

export default PendingQuotes ;

