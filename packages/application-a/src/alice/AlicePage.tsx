import { css } from "linaria";
import * as React from "react";

export const AlicePage: React.FC = () => (
  <h1 className={pageStyle}>Page Alice from Application A</h1>
);

const pageStyle = css`
  color: #3535ad;
`;
