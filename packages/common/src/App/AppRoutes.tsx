import * as React from "react";
import { Suspense } from "react";
import { Route, Switch } from "react-router";

import { css } from "linaria";

const LoadingPage = () => <h1 className={loaderStyle}>Загрузка</h1>;

export interface AppRouteParameters {
  path: string;
  component: React.ComponentType;
}

export interface AppRoutesProps {
  routes: AppRouteParameters[];
}

export const AppRoutes: React.FC<AppRoutesProps> = ({ routes }) => (
  <Suspense fallback={<LoadingPage />}>
    <Switch>
      {routes.map(({ path, component }) => (
        <Route path={path} component={component} key={path} />
      ))}
    </Switch>
  </Suspense>
);

const loaderStyle = css`
  font-style: italic;
`;
