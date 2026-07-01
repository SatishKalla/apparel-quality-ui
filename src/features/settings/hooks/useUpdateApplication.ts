import { useMutation, useQueryClient } from "@tanstack/react-query";

import { settingsService } from "../api/settings.service";
import { SETTINGS_QUERY_KEY } from "./useSettings";

import type { SettingsData } from "../types/settings.types";

export function useUpdateApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (application: SettingsData["application"]) =>
      settingsService.updateApplication(application),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SETTINGS_QUERY_KEY,
      });
    },
  });
}
