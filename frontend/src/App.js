import React, { useState } from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Select } from "antd";
import {
  UnorderedListOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  SendOutlined,
  FileOutlined,
  LineChartOutlined,
  TeamOutlined,
  SettingOutlined,
  WhatsAppOutlined,
  BellFilled,
  WechatFilled,
  SettingFilled,
} from "@ant-design/icons";
import ContentGrid from './components/grid/ContentGrid'
import QuotesGrid from './components/quotesGrid/QuotesGrid'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App() {
  const [isHomeVisible, setHomeVisible] = useState(true);
  const [isQuotesVisible, setQuotesVisible] = useState(false);
  const [quotes, setQuotes] = useState([]);
  const [airports, setAirports] = useState([]);

  const showHome = () => {
    setHomeVisible(true);
  };

  const hideHome = () => {
    setHomeVisible(false);
  };

  const showQuotes = () => {
    setQuotesVisible(true);
    setHomeVisible(false);
  };

  const hideQuotes = () => {
    setQuotesVisible(false);
    setHomeVisible(true);
  };
  
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          <Menu className='headerMenu' theme="dark" mode="horizontal" >
            <img className='headerLogo' alt='logo' width='130' src={'/images/WetBatLogo.png'}/>
            <Select
                showSearch
                placeholder="&#x1F50D;"
                style={{ width: 400 }}
            />
            <Menu.Item key="3" icon={<BellFilled />} />
            <Menu.Item key="4" icon={<WechatFilled />} />
            <Menu.Item key="5" icon={<SettingFilled />} />
            <img alt='' width='35' className='leadsavatar' src='https://randomuser.me/api/portraits/thumb/women/32.jpg'/>
          </Menu>
        </Header>
        <Layout>
          <Sider width={150} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" title="Menu">
                <Menu.Item onSelect = {showHome} onDeselect={hideHome} onClick={showHome} key="1" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
                <Menu.Item onSelect = {showQuotes} onDeselect={hideQuotes} onClick={showQuotes} key="2" icon={<DollarCircleOutlined />}>
                  Quotes
                </Menu.Item>
                <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                  Leads
                </Menu.Item>
                <Menu.Item key="4" icon={<SendOutlined />}>
                  Tours
                </Menu.Item>
                <Menu.Item key="5" icon={<FileOutlined />}>
                  Invoices
                </Menu.Item>
                <Menu.Item key="6" icon={<LineChartOutlined />}>
                  Analytics
                </Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>
                  Team
                </Menu.Item>
                <Menu.Item key="8" icon={<SettingOutlined />}>
                  Admin
                </Menu.Item>
                <Menu.Item key="9" icon={<WhatsAppOutlined />}>
                  Support
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 900
              }}
            >{ isHomeVisible 
              ? <ContentGrid
                  airports={airports}
                  setAirports={setAirports}
                  quotes={quotes}
                  setQuotes = {setQuotes}
              />
              : isQuotesVisible 
              ? <div className='grid-items'>
                  <QuotesGrid
                    airports={airports}
                    setAirports={setAirports}
                    quotes={quotes}
                    setQuotes = {setQuotes}
                  />
                </div>
              : <ContentGrid/>
            }
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
