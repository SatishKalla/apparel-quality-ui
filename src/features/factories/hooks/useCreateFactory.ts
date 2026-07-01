import { useMutation, useQueryClient } from "@tanstack/react-query";

import { factoryService } from "../api/factory.service";
import type { FactoryFormData } from "../types/factory.types";

import { QueryKeys } from "@/shared/constants/queryKeys";

export function useCreateFactory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: FactoryFormData) => factoryService.create(data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.factories],
      });
    },
  });
}
