import { useMutation, useQueryClient } from "@tanstack/react-query";

import { inspectorService } from "../api/inspector.service";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useDeleteInspector() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => inspectorService.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.inspectors],
      });
    },
  });
}
