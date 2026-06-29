import type { User } from "./types";

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";
const USER = "user";

export const authStorage = {
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN);
  },

  getUser(): User | null {
    const user = localStorage.getItem(USER);
    return user ? JSON.parse(user) : null;
  },

  setSession(access: string, refresh: string, user: User) {
    localStorage.setItem(ACCESS_TOKEN, access);
    localStorage.setItem(REFRESH_TOKEN, refresh);
    localStorage.setItem(USER, JSON.stringify(user));
  },

  clear() {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    localStorage.removeItem(USER);
  },
};
