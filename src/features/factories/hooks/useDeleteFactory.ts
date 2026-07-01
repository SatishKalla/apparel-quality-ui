import { useMutation, useQueryClient } from "@tanstack/react-query";

import { factoryService } from "../api/factory.service";

import { QueryKeys } from "@/shared/constants/queryKeys";

export function useDeleteFactory() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => factoryService.delete(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.factories],
      });
    },
  });
}
