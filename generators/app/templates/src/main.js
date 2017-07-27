
import 'react-hot-loader/patch'
import 'styles/index.scss'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
<% if (relay === 'redux') { %>
import { Provider } from 'react-redux'
import store from 'store'
<% } else if (relay === 'mobx') { %>
import { Provider } from 'mobx-react'
import Todo from 'store'
<% } %>

import Layout from 'components/Layout'
import Home from 'components/Home'

<% if (relay === 'redux')  { %>
const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <Layout>
        <Route path="" component={Home}/>
      </Layout>
    </BrowserRouter>
  </Provider>
)
<% } else if (relay === 'mobx') { %>
const renderApp = () => (
  <Provider todo={Todo}>
    <BrowserRouter basename="/">
      <Layout>
        <Route path="" component={Home}/>
      </Layout>
    </BrowserRouter>
  </Provider>
)
<% } %>

const root = document.getElementById('root')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/Layout', () => {
    require('components/Layout')
    render(renderApp(), root)
  })
}
