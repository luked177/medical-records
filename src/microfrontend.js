import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const microfrontend = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
	domElementGetter: () => document.getElementById("root"),
});

export const bootstrap = [microfrontend.bootstrap];

export const mount = [microfrontend.mount];

export const unmount = [microfrontend.unmount];
