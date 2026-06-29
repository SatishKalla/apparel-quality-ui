import { useQuery } from "@tanstack/react-query";
import inspectionService from "../api/inspection.service";

export function useInspectionList() {
  return useQuery({
    queryKey: ["inspections"],

    queryFn: () => inspectionService.getAll(),
  });
}
