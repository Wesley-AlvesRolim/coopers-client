import { HttpClient } from '@/data/protocols';
import { FetchLandingTodoData, LandingTodoData } from '@/domain/use-cases';

export class RemoteFetchLandingTodoData implements FetchLandingTodoData {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  get(): Promise<LandingTodoData[]> {
    const httpResponse = this.httpClient.request({
      url: this.url,
      method: 'GET',
    });

    return httpResponse;
  }
}
