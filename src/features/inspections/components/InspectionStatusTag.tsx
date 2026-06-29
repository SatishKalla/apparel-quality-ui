import { Tag } from "antd";
import type { InspectionStatus } from "../types/inspection.types";

interface Props {
  status: InspectionStatus;
}

const statusColor: Record<InspectionStatus, string> = {
  Passed: "green",
  Pending: "orange",
  Rejected: "red",
};

export default function InspectionStatusTag({ status }: Props) {
  return <Tag color={statusColor[status]}>{status}</Tag>;
}
