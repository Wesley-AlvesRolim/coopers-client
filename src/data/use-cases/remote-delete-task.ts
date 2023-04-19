import { type HttpClient } from '@/data/protocols';
import { type DeleteTaskRequest, type DeleteTask } from '@/domain/use-cases';

export class RemoteDeleteTask implements DeleteTask {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async delete({ id }: DeleteTaskRequest): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'DELETE',
    });

    if (Number(httpResponse?.statusCode) >= 400) {
      throw new Error(httpResponse.message);
    }

    return httpResponse;
  }
}
