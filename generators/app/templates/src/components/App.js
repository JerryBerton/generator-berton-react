import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import Home from 'components/Home'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

export default class App extends Component{
  constructor(props) {
    super(props)
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  renderMenu() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <Link to="/template/1" className="nav-text">template-1</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <Link to="/template/2" className="nav-text">template-2</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <Link to="/template/3" className="nav-text">template-3</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <Link  to="/template/4" className="nav-text">template-4</Link>
        </Menu.Item>
      </Menu>
    )
  }
  render() {
    return (
      <BrowserRouter basename="/">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="github">
            <a href="https://github.com/JerryBerton/generator-berton-react">
              <Icon type="github" />
            </a>
          </div>
          <div className="logo">基础菜单</div>
          { this.renderMenu() }
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route exact path="/template/:id" component={Home}/>
              </Switch>
            </div>
          </Content>
            <Footer style={{ textAlign: 'center' }}>
              React  template ©2017 Created by Jerry Berton
            </Footer>
        </Layout>
      </Layout>
      </BrowserRouter>
    )
  }
}
