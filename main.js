import "./styles.css";
import {renderApp} from "./components.js";
import {initRouter} from "./router.js";
const app=document.querySelector("#app");
window.addEventListener("hashchange",()=>renderApp(app));
window.addEventListener("load",()=>{initRouter();renderApp(app)});