import { useMutation, useQueryClient } from "@tanstack/react-query";

import { factoryService } from "../api/factory.service";
import type { FactoryFormData } from "../types/factory.types";
import { QueryKeys } from "@/shared/constants/queryKeys";

interface UpdateFactoryRequest {
  id: number;
  data: FactoryFormData;
}

export function useUpdateFactory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: UpdateFactoryRequest) => factoryService.update(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.factories],
      });
    },
  });
}
