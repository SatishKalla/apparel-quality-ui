import { Menu } from "antd";
import { DashboardOutlined, CheckSquareOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function AppSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Menu
      mode="inline"
      theme="dark"
      selectedKeys={[location.pathname]}
      style={{
        height: "100%",
        borderInlineEnd: 0,
      }}
      items={[
        {
          key: "/",
          icon: <DashboardOutlined />,
          label: "Dashboard",
        },
        {
          key: "/inspections",
          icon: <CheckSquareOutlined />,
          label: "Inspections",
        },
      ]}
      onClick={(item) => navigate(item.key)}
    />
  );
}
