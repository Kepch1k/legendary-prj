import App from "./Components/App/App";
import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import "./config/i18n";
import "./styles/normalize.css";
import "./styles/index.css";
import "./styles/index.scss";

ReactDOM.render(
    <>
        <Suspense fallback={null}>
            <App/>
        </Suspense>
    </>,
    document.querySelector("#root")
)

