import { type HttpClient } from '@/data/protocols';
import {
  type ReadTasksRequest,
  type ReadTasksResponse,
  type ReadTasks,
} from '@/domain/use-cases';

export class RemoteReadTasks implements ReadTasks {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async read({ userId }: ReadTasksRequest): Promise<ReadTasksResponse> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${userId}`,
      method: 'GET',
    });

    if (Number(httpResponse?.statusCode) >= 400) {
      throw new Error(httpResponse.message);
    }

    return httpResponse;
  }
}
