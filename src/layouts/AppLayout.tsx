import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from "@/components/layout/AppSidebar";
import { useSidebar } from "@/shared/hooks/useSidebar";
import AppBreadcrumb from "@/components/layout/AppBreadcrumb";
import AppFooter from "@/components/layout/AppFooter";

const { Sider, Header, Content } = Layout;

export default function AppLayout() {
  const { collapsed, toggle } = useSidebar();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        trigger={null}
        collapsed={collapsed}
        width={240}
        collapsedWidth={80}
        theme="dark"
      >
        <AppSidebar collapsed={collapsed} />
      </Sider>

      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
            borderBottom: "1px solid #f0f0f0",
            height: 64,
          }}
        >
          <AppHeader collapsed={collapsed} onToggle={toggle} />
        </Header>

        <Content
          style={{
            padding: 24,
            background: "#f5f5f5",
          }}
        >
          <AppBreadcrumb />

          <div
            style={{
              marginTop: 16,
              padding: 24,
              background: "#fff",
              borderRadius: 8,
              minHeight: "calc(100vh - 170px)",
            }}
          >
            <Outlet />
          </div>
        </Content>

        <AppFooter />
      </Layout>
    </Layout>
  );
}
