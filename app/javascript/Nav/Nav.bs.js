// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";

function s(prim) {
  return prim;
}

function Nav(Props) {
  return React.createElement("nav", {
              className: "w-full py-4 px-8 bg-gray-200 flex justify-between items-center"
            }, React.createElement("h1", {
                  className: "text-3xl bg-blue-400 text-white rounded shadow-md py-2 px-4"
                }, "Logo"), React.createElement("div", {
                  className: "font-mono text-sm"
                }, React.createElement("ul", {
                      className: "flex items-center"
                    }, Belt_Array.mapWithIndex([
                          "About",
                          "Contact"
                        ], (function (index, text) {
                            return React.createElement("li", {
                                        key: String(index),
                                        className: "mx-2 hover:text-blue-400"
                                      }, text);
                          })))));
}

var make = Nav;

export {
  s ,
  make ,
  
}
/* react Not a pure module */
