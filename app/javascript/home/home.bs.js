// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as ReactDom from "react-dom";
import * as Nav$FullstackApp from "../Nav/Nav.bs.js";

function Home$App(Props) {
  return React.createElement(Nav$FullstackApp.make, {});
}

var App = {
  make: Home$App
};

function run(param) {
  var root = document.querySelector("#reactRoot");
  if (!(root == null)) {
    ReactDom.render(React.createElement("div", undefined, React.createElement(Home$App, {})), root);
    return ;
  }
  
}

export {
  App ,
  run ,
  
}
/* react Not a pure module */
