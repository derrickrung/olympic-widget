import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const widget = {
    initialize: (elementId, selectedSort = "gold") =>
        ReactDOM.render(
            <App selectedSort={selectedSort} />,
            document.getElementById(elementId)
        )
};

window.widget = widget;

window.widget.initialize("root");
