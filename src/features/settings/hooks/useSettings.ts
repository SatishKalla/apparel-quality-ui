import { useQuery } from "@tanstack/react-query";

import { settingsService } from "../api/settings.service";

export const SETTINGS_QUERY_KEY = ["settings"];

export function useSettings() {
  return useQuery({
    queryKey: SETTINGS_QUERY_KEY,

    queryFn: () => settingsService.getSettings(),

    staleTime: 1000 * 60 * 5,
  });
}
