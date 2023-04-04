import { registerApplication, start } from "single-spa";

registerApplication(
	"my-react-app",
	() => import("./microfrontend.js"),
	() => true
);

start();
