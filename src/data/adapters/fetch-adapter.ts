import { type HttpClient, type HttpClientParams } from '@/data/protocols';

export class FetchAdapter implements HttpClient {
  async request(params: HttpClientParams): Promise<any> {
    const response = await fetch(params.url, {
      method: params.method,
      body: params.body,
      headers: params.headers,
    });

    return await response.json();
  }
}
