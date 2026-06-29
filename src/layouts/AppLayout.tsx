import { AppHeader, AppSidebar } from "@/components/layout";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export default function AppLayout() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          padding: 0,
          background: "#fff",
        }}
      >
        <AppHeader />
      </Header>

      <Layout>
        <Sider width={240} theme="dark">
          <AppSidebar />
        </Sider>

        <Content
          style={{
            padding: 24,
            margin: 0,
            background: "#f5f5f5",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
