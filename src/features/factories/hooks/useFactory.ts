import { useQuery } from "@tanstack/react-query";

import { factoryService } from "../api/factory.service";

export function useFactory(id: number) {
  return useQuery({
    queryKey: ["factory", id],

    queryFn: () => factoryService.getById(id),

    enabled: !!id,
  });
}
