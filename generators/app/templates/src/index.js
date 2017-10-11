import 'react-hot-loader/patch'
import 'styles/index.scss';
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'components/App'

const root = document.getElementById('root')

const render = Component =>
  ReactDOM.render(
    <AppContainer>
        <Component />
    </AppContainer>,
  root
)


render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextRootContainer = require('./components/App').default
    render(NextRootContainer)
  })
}
