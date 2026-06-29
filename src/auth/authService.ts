import api from "@/api/axios";
import type { LoginRequest, LoginResponse } from "./types";

export const authService = {
  login(data: LoginRequest) {
    return api.post<LoginResponse>("/auth/login", data);
  },

  logout() {
    return Promise.resolve();
  },
};
