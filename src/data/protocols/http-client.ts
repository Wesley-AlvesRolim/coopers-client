export interface HttpClientParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: BodyInit | null;
  headers?: Headers;
}

export interface HttpClient {
  request: (params: HttpClientParams) => Promise<any>;
}
