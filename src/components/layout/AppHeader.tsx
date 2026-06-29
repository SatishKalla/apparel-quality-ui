import { useAuth } from "@/auth/useAuth";
import {
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Flex, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

interface Props {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AppHeader({ collapsed, onToggle }: Props) {
  const navigate = useNavigate();
  const { logout, user } = useAuth();

  const items = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "settings",
      label: "Settings",
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        height: "100%",
        padding: "0 24px",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onToggle}
      />

      <Space size="large">
        <Badge count={3}>
          <BellOutlined style={{ fontSize: 18 }} />
        </Badge>

        <Dropdown
          menu={{
            items,
            onClick: ({ key }) => {
              switch (key) {
                case "profile":
                  navigate("/profile");
                  break;

                case "settings":
                  navigate("/settings");
                  break;

                case "logout":
                  logout();
                  navigate("/login");
                  break;
              }
            },
          }}
          trigger={["click"]}
        >
          <Space style={{ cursor: "pointer" }}>
            <Avatar icon={<UserOutlined />} />

            <Text strong>{user?.username ?? "Admin"}</Text>
          </Space>
        </Dropdown>
      </Space>
    </Flex>
  );
}
