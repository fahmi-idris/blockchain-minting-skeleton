/* eslint-disable import/prefer-default-export */
import axios, { AxiosResponse } from 'axios';

import { AxiosParams } from 'interfaces/common';

const API_URL = process.env.REACT_APP_GATEWAY_API_URL || '';

export async function fetch<P>({ url, params, data, type, base }: AxiosParams) {
  return axios({
    url,
    params: {
      ...params,
    },
    data,
    method: type,
    baseURL: base || API_URL,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then((resp: AxiosResponse<P>) => resp.data);
}
