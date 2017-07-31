import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Icon } from 'antd'
export default class Layout extends Component{
  constructor(props) {
    super(props)
  }
  render() {
    const extra = (
      <a
        target="_blank"
        style={{ fontSize: 16, color: '#08c' }}
        href="https://github.com/JerryBerton"
      >
        <Icon type="github" />
      </a>
    )
    return (
      <Card
        title="Welcome to you !!!"
        style={{ width: 560 }}
        className="layout-greet"
        extra={extra}
      >
        {this.props.children}
      </Card>
    )
  }
}
