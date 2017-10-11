import React, { Component } from 'react';
export default class Home extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.match
    return (
      <div className="home">
        <div>
          模板数字 { params.id }
        </div>
      </div>
    )
  }
}
