import { App } from "application-common/";
import APP_B_ROUTES from "application_b/routes";
// import SayHelloFromB from "application_b/SayHelloFromB";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { APP_A_ROUTES } from "./routes";

ReactDOM.render(
  <App routes={[...APP_A_ROUTES, ...APP_B_ROUTES]} />,
  document.getElementById("root")
);
