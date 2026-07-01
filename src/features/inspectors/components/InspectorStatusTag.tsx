import { Tag } from "antd";

import type { InspectorStatus } from "../types/inspector.types";

interface Props {
  status: InspectorStatus;
}

const colors: Record<InspectorStatus, string> = {
  Active: "green",
  Inactive: "red",
};

export default function InspectorStatusTag({ status }: Props) {
  return <Tag color={colors[status]}>{status}</Tag>;
}
