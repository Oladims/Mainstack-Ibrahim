import axios, { AxiosRequestConfig } from 'axios';

export class AxiosReqHandlers {
  static controller = new AbortController();

  // A default axios instance to api url (https://fe-task-api.mainstack.io)
  static API = axios.create({
    // baseURL: import.meta.env.VITE_PUBLIC_API_URL,
    baseURL: "https://fe-task-api.mainstack.io",
    timeout: 5000,
    withCredentials: false,
    signal: this.controller.signal,
  });

  static apiRequest = async <T>(config: AxiosRequestConfig): Promise<T> => {
    try {
      const response = await this.API(config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

AxiosReqHandlers.API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

AxiosReqHandlers.API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    return Promise.reject(error);
  }
);
