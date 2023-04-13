import { HttpClient, HttpClientParams } from '@/data/protocols';

export class FetchAdapter implements HttpClient {
  async request(params: HttpClientParams): Promise<any> {
    const response = await fetch(params.url, {
      method: params.method,
    });

    return await response.json();
  }
}
