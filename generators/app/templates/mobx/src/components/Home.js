import React, { Component } from 'react'
import { observer, inject} from 'mobx-react'

@inject('todo')
@observer
export default class Home extends Component{
  constructor(props) {
    super(props)
  }
  handleClickAdd = () => {
    const text = this.input.value
    this.props.todo.add(text);
    this.input.value = ''
  }
  handleClickDel(index) {
    this.props.todo.remove(index);
  }
  render() {
     const { list } = this.props.todo;
    return (
      <div className="home">
        <div className="home-">
          <input className="home-ipt" ref={input => this.input = input }/>
          <button className="home-btb" onClick={this.handleClickAdd}>添加</button>
        </div>
        <div>
          <ul className="home-box">
            {
              list.map((c, idx) => (
                <li key={idx}>
                  <span>{c}</span>
                  <button
                    className="home-btb"
                    onClick={() => { this.handleClickDel(idx) }}>
                    删除
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}
