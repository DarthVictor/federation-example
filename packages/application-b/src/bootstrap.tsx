import * as React from "react";
import * as ReactDOM from "react-dom";

import SayHelloFromA from "application_a/SayHelloFromA";

import App from "./app";

ReactDOM.render(
  <>
    <App />
    <SayHelloFromA />
  </>,
  document.getElementById("root")
);
