import { useMutation, useQueryClient } from "@tanstack/react-query";

import { inspectorService } from "../api/inspector.service";
import type { InspectorFormData } from "../types/inspector.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

export function useCreateInspector() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: InspectorFormData) => inspectorService.create(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.inspectors],
      });
    },
  });
}
