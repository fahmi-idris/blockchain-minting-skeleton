import { Method } from 'axios';
import { JsonObject } from 'interfaces';

export interface DataMap<T> {
  [key: string]: T;
}

export interface Pagination {
  total: number;
}

export interface AxiosParams {
  type?: Method;
  params?: JsonObject;
  url?: string;
  data?: JsonObject | FormData;
  base?: string;
}

export interface AxiosResponse<T> {
  data: T;
}
