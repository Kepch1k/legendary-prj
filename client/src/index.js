import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import "./config/i18n";
import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/index.scss";

import App from "./Components/App/App";
import store from './Redux/store';

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={null}>
            <App/>
        </Suspense>
    </Provider>,
    document.querySelector("#root")
)

