import { type HttpClient } from '@/data/protocols';
import {
  type FetchLandingTodoData,
  type LandingTodoData,
} from '@/domain/use-cases';

export class RemoteFetchLandingTodoData implements FetchLandingTodoData {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async get(): Promise<LandingTodoData[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'GET',
    });

    return httpResponse;
  }
}
