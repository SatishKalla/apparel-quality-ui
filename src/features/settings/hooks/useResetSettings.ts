import { useMutation, useQueryClient } from "@tanstack/react-query";

import { settingsService } from "../api/settings.service";
import { SETTINGS_QUERY_KEY } from "./useSettings";

export function useResetSettings() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => settingsService.reset(),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SETTINGS_QUERY_KEY,
      });
    },
  });
}
