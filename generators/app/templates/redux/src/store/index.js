import { createStore, compose, applyMiddleware} from 'redux';
import rootReducer from 'reducer';

// DevTools专用配置
let reduxDevTools = function () {
  if( typeof window === 'object'
    && typeof window.devToolsExtension !== 'undefined') {
    return window.devToolsExtension()
  } else {
    return f => f
  }
};

const configureStore = compose(
  applyMiddleware(),
  reduxDevTools()
)(createStore);

export default configureStore(rootReducer);
