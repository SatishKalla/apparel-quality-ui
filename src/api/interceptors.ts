import { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import { authStorage } from "@/auth/authStorage";

export const setupInterceptors = (api: AxiosInstance) => {
  // Request Interceptor
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = authStorage.getAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  // Response Interceptor
  api.interceptors.response.use(
    (response) => response,

    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        // eslint-disable-next-line no-console
        console.warn("Unauthorized request");

        // Future implementation:
        // 1. Refresh token
        // 2. Retry original request
        // 3. Logout if refresh fails
      }

      return Promise.reject(error);
    },
  );
};
