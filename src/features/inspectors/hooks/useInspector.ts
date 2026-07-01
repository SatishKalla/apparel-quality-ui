import { useQuery } from "@tanstack/react-query";

import { inspectorService } from "../api/inspector.service";

export function useInspector(id: number) {
  return useQuery({
    queryKey: ["inspector", id],

    queryFn: () => inspectorService.getById(id),

    enabled: !!id,
  });
}
