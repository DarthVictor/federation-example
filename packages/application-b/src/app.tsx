import * as React from "react";

import { css, cx } from "linaria";

import "./app.css";

export default function SayHelloFromB() {
  return (
    <h1 className={cx(app2Header, "header_app2")}>Hello from Application B!</h1>
  );
}

const app2Header = css`
  color: red;
`;
