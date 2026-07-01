import type { SettingsData } from "../types/settings.types";

export const settingsData: SettingsData = {
  profile: {
    firstName: "Satish",
    lastName: "Kalla",
    email: "satish.kalla@example.com",
    phone: "+91 9876543210",
    designation: "Quality Manager",
  },

  application: {
    theme: "light",
    language: "English",
    dateFormat: "DD/MM/YYYY",
  },

  notifications: {
    emailNotifications: true,
    inspectionReminder: true,
    weeklyReport: false,
  },
};
