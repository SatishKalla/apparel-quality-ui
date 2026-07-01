import {
  BankOutlined,
  BarChartOutlined,
  CheckSquareOutlined,
  DashboardOutlined,
  SettingOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import type { ReactNode } from "react";

export interface AppRoute {
  path: string;
  title: string;

  icon?: ReactNode;

  showInMenu?: boolean;

  breadcrumb: string[];
}

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    title: "Dashboard",
    icon: <DashboardOutlined />,
    showInMenu: true,
    breadcrumb: ["Dashboard"],
  },

  {
    path: "/inspections",
    title: "Inspection Management",
    icon: <CheckSquareOutlined />,
    showInMenu: true,
    breadcrumb: ["Dashboard", "Inspection Management"],
  },
  {
    path: "/inspections/create",
    title: "Create Inspection",
    breadcrumb: ["Dashboard", "Inspection Management", "Create Inspection"],
  },

  {
    path: "/inspections/:id",
    title: "Inspection Details",
    breadcrumb: ["Dashboard", "Inspection Management", "Inspection Details"],
  },

  {
    path: "/inspections/:id/edit",
    title: "Edit Inspection",
    breadcrumb: ["Dashboard", "Inspection Management", "Edit Inspection"],
  },

  {
    path: "/factories",
    title: "Factory Management",
    icon: <BankOutlined />,
    showInMenu: true,
    breadcrumb: ["Dashboard", "Factory Management"],
  },
  {
    path: "/factories/create",
    title: "Create Factory",
    breadcrumb: ["Dashboard", "Factory Management", "Create Factory"],
  },

  {
    path: "/factories/:id",
    title: "Factory Details",
    breadcrumb: ["Dashboard", "Factory Management", "Factory Details"],
  },
  {
    path: "/factories/:id/edit",
    title: "Edit Factory",
    breadcrumb: ["Dashboard", "Factory Management", "Edit Factory"],
  },

  {
    path: "/inspectors",
    title: "Inspector Management",
    icon: <TeamOutlined />,
    showInMenu: true,
    breadcrumb: ["Dashboard", "Inspector Management"],
  },

  {
    path: "/reports",
    title: "Reports",
    icon: <BarChartOutlined />,
    showInMenu: true,
    breadcrumb: ["Dashboard", "Reports"],
  },

  {
    path: "/settings",
    title: "Settings",
    icon: <SettingOutlined />,
    showInMenu: true,
    breadcrumb: ["Dashboard", "Settings"],
  },
];
