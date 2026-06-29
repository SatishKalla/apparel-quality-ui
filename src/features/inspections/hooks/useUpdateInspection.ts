import { useMutation, useQueryClient } from "@tanstack/react-query";

import { inspectionService } from "../api/inspection.service";
import type { InspectionForm } from "../types/inspection.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

interface UpdateInspectionRequest {
  id: number;
  data: InspectionForm;
}

export function useUpdateInspection() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateInspectionRequest) => inspectionService.update(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.inspections],
      });
    },
  });
}
