import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Layout extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="layout">
        <div className="layout-greet">
          <h2> Welcome to you !!!</h2>
          <p>
            作者：
            <a target="_blank" href="https://github.com/JerryBerton">https://github.com/JerryBerton</a>
          </p>
          <p>Demo: Mobx todo list </p>
        </div>
        {this.props.children}
      </div>
    )
  }
}
