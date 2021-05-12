import * as React from "react";
import { AppRoutes, AppRoutesProps } from "./AppRoutes";

export interface AppProps extends AppRoutesProps {}

export const App: React.FC<AppRoutesProps> = ({ routes }) => (
  <AppRoutes routes={routes} />
);
