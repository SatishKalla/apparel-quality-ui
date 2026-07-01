import { useMutation, useQueryClient } from "@tanstack/react-query";

import { settingsService } from "../api/settings.service";
import { SETTINGS_QUERY_KEY } from "./useSettings";

import type { SettingsData } from "../types/settings.types";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profile: SettingsData["profile"]) => settingsService.updateProfile(profile),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: SETTINGS_QUERY_KEY,
      });
    },
  });
}
