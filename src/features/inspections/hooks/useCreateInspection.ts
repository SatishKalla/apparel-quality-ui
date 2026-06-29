import { useMutation, useQueryClient } from "@tanstack/react-query";

import { inspectionService } from "../api/inspection.service";
import type { InspectionForm } from "../types/inspection.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useCreateInspection() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: InspectionForm) => inspectionService.create(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.inspections],
      });
    },
  });
}
