export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  designation: string;
}

export interface ApplicationSettings {
  theme: "light" | "dark";
  language: string;
  dateFormat: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  inspectionReminder: boolean;
  weeklyReport: boolean;
}

export interface SettingsData {
  profile: UserProfile;
  application: ApplicationSettings;
  notifications: NotificationSettings;
}
