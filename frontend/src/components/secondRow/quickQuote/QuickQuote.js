import React from "react";
import "antd/dist/antd.css";
import './QuickQuote.css';
import { Row, Col, Divider, Select, Button } from 'antd';
import {
  ForwardOutlined,
  FullscreenOutlined
} from "@ant-design/icons";

function QuickQuote () {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  const style = { padding: '0px', margin: '5px 0 5px'};
  const iconstyle = { margin: '0 3px 0 0', fontSize: '1.25em' , color: '#5BBFBA'}
  const searchStyle = { margin: '15px 0 0 25px'}
  const searchStyle2 = { margin: '3px 0 0 0'}
  const searchStyle3 = { margin: '0px 0 0 12px'}
  const searchStyle4 = { margin: '0px 0 0 -11px'}
  
  return (
    <>
      <Row >
        <Col span={24} >
          <div className='title'>
            <div className='title-left'>
              <ForwardOutlined style={iconstyle}/>
              Quick Quote
            </div>
            <div className='icon-right'>
              <FullscreenOutlined  style={iconstyle}/>
            </div>
          </div>
        </Col>
        <Divider style={style}/>
      </Row>
      <Row gutter={[24, 24]}>
        <Col style={searchStyle}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="FROM"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
        <Col style={searchStyle2}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="DESTINATION"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col style={searchStyle3}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="DEPARTURE DATE"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
        <Col style={searchStyle4}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="RETURN DATE"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col style={searchStyle3}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="# OF TRAVELLERS"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
        <Col style={searchStyle4}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="TRANSPORTATION"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col style={searchStyle3}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="NAME"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Col>
        <Col style={searchStyle4}>
          <div className='quote-button'>
            <Button type="primary" style={{ background: "#5BBFBA", borderColor: "#5BBFBA" }} shape="round" size='large' >
              Create a Quote
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default QuickQuote ;

