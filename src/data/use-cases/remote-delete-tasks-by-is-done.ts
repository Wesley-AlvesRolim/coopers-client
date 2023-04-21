import { type HttpClient } from '@/data/protocols';
import {
  type DeleteTasksByIsDoneRequest,
  type DeleteTasksByIsDone,
} from '@/domain/use-cases';

export class RemoteDeleteTasksByIsDone implements DeleteTasksByIsDone {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async delete({ userId, isDone }: DeleteTasksByIsDoneRequest): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${userId}?isDone=${isDone}`,
      method: 'DELETE',
    });

    if (Number(httpResponse?.statusCode) >= 400) {
      throw new Error(httpResponse.message);
    }

    return httpResponse;
  }
}
