import { appRoutes } from "@/app/app.routes";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
  collapsed: boolean;
}

export default function AppSidebar({ collapsed }: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = appRoutes
    .filter((route) => route.showInMenu)
    .map((route) => ({
      key: route.path,
      label: route.title,
      icon: route.icon,
    }));

  return (
    <>
      <div
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: collapsed ? 22 : 18,
          fontWeight: 700,
          borderBottom: "1px solid rgba(255,255,255,.1)",
        }}
      >
        {collapsed ? "AQ" : "AQIP"}
      </div>

      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
        items={menuItems}
        onClick={({ key }) => navigate(key)}
        style={{
          borderInlineEnd: 0,
          height: "calc(100vh - 64px)",
        }}
      />
    </>
  );
}
