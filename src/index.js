import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = () => {
	ReactDOM.render(<App />, document.getElementById("root"));
};

if (!window.singleSpaNavigate) {
	mount();
}
