import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/auth/useAuth";

const { Title } = Typography;

export default function AppHeader() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{
        height: "100%",
        padding: "0 24px",
      }}
    >
      <Title level={4} style={{ margin: 0 }}>
        Apparel Quality Inspection
      </Title>

      <Button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Flex>
  );
}
