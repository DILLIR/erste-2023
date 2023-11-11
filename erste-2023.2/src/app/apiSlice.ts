import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface ApiConfig extends AxiosRequestConfig {
  baseURL: string;
}

class Api {
  private readonly instance: AxiosInstance;

  constructor(config: ApiConfig) {
    this.instance = axios.create(config);
  }

  public async get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.get(url, config);
  }

  public async post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.post(url, data, config);
  }

  public async put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.put(url, data, config);
  }

  public async delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.instance.delete(url, config);
  }
}

const ApiInstance = new Api({baseURL: "https://ed-hackathon.nurxie.org/api/"})

export default ApiInstance;
