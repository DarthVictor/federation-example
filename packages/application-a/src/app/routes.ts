import { AppProps } from "application-common";
import { AlicePage } from "../alice/AlicePage";
import { AmilyPage } from "../amily/AmilyPage";

export const APP_A_ROUTES: AppProps["routes"] = [
  {
    path: "/alice",
    component: AlicePage,
  },
  {
    path: "/amily",
    component: AmilyPage,
  },
];
