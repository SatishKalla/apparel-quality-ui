import { useMutation, useQueryClient } from "@tanstack/react-query";

import { inspectionService } from "../api/inspection.service";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useDeleteInspection() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => inspectionService.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.inspections],
      });
    },
  });
}
