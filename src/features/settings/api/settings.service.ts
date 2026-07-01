import { delay } from "@/shared/utils/mockData";
import { settingsData } from "../mocks/settings-data";

import type { SettingsData } from "../types/settings.types";

class SettingsService {
  private settings: SettingsData = structuredClone(settingsData);

  async getSettings(): Promise<SettingsData> {
    await delay();

    return structuredClone(this.settings);
  }

  async updateProfile(profile: SettingsData["profile"]): Promise<SettingsData["profile"]> {
    await delay();

    this.settings.profile = {
      ...profile,
    };

    return structuredClone(this.settings.profile);
  }

  async updateApplication(
    application: SettingsData["application"],
  ): Promise<SettingsData["application"]> {
    await delay();

    this.settings.application = {
      ...application,
    };

    return structuredClone(this.settings.application);
  }

  async updateNotifications(
    notifications: SettingsData["notifications"],
  ): Promise<SettingsData["notifications"]> {
    await delay();

    this.settings.notifications = {
      ...notifications,
    };

    return structuredClone(this.settings.notifications);
  }

  async reset(): Promise<SettingsData> {
    await delay();

    this.settings = structuredClone(settingsData);

    return structuredClone(this.settings);
  }
}

export const settingsService = new SettingsService();
