import { Breadcrumb } from "antd";
import { matchPath, useLocation } from "react-router-dom";

import { appRoutes } from "@/app/app.routes";

export default function AppBreadcrumb() {
  const { pathname } = useLocation();

  const route = appRoutes.find((r) =>
    matchPath(
      {
        path: r.path,
        end: true,
      },
      pathname,
    ),
  );

  if (!route) return null;

  return (
    <Breadcrumb
      style={{ marginBottom: 16 }}
      items={route.breadcrumb.map((item) => ({
        title: item,
      }))}
    />
  );
}
