
import 'react-hot-loader/patch'
import 'styles/index.css'

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


import Layout from 'components/Layout'
import Home from 'components/Home'

const renderApp = () => (
  <Provider store={store}>
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
