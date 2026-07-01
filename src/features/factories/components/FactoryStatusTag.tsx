import { Tag } from "antd";

import type { FactoryStatus } from "../types/factory.types";

interface Props {
  status: FactoryStatus;
}

const colors: Record<FactoryStatus, string> = {
  Active: "green",
  Inactive: "red",
};

export default function FactoryStatusTag({ status }: Props) {
  return <Tag color={colors[status]}>{status}</Tag>;
}
