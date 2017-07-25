/* @flow */
import 'react-hot-loader/patch'
import 'styles/index.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import { Provider } from 'mobx-react'
import Todo from 'stores'

import Layout from 'components/Layout'
import Home from 'components/Home'

const renderApp = () => (
  <Provider todo={Todo}>
    <BrowserRouter basename="/">
      <Layout>
        <Route path="" component={Home}/>
      </Layout>
    </BrowserRouter>
  </Provider>
)
const root = document.getElementById('root')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/Layout', () => {
    require('components/Layout')
    render(renderApp(), root)
  })
}
