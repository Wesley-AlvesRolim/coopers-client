export interface HttpClientParams {
  url: string;
  method: 'GET';
}

export interface HttpClient {
  request: (params: HttpClientParams) => Promise<any>;
}
