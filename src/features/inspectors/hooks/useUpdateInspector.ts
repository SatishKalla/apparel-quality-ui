import { useMutation, useQueryClient } from "@tanstack/react-query";

import { inspectorService } from "../api/inspector.service";
import type { InspectorFormData } from "../types/inspector.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

interface UpdateInspectorRequest {
  id: number;
  data: InspectorFormData;
}

export function useUpdateInspector() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateInspectorRequest) => inspectorService.update(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.inspectors],
      });
    },
  });
}
