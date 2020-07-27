import React from 'react';
import { render } from "react-dom";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import './css/styles.scss';
import App from './components/App';

const store = configureStore();

render(
    <ReduxProvider store={store}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>,
    document.getElementById("root")
  );
  
//
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
