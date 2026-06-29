import { Flex, Spin } from "antd";

export default function AppLoader() {
  return (
    <Flex justify="center" align="center" style={{ minHeight: 300 }}>
      <Spin size="large" />
    </Flex>
  );
}
