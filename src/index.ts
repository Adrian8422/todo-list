import "./components/header";
import "./components/text";
import "./components/todo-item";
import { initHomePage } from "./pages";

import "./state";
import { state } from "./state";
(() => {
  initHomePage(document.querySelector("#root"));
})();
