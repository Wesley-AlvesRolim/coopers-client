import { type HttpClient } from '@/data/protocols';
import {
  type EditTaskRequest,
  type EditTaskResponse,
  type EditTask,
} from '@/domain/use-cases';

export class RemoteEditTask implements EditTask {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async edit(task: EditTaskRequest): Promise<EditTaskResponse> {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${task.id}`,
      method: 'PUT',
      body: JSON.stringify({
        description: task.description,
        isDone: task.isDone,
      }),
      headers,
    });

    if (Number(httpResponse?.statusCode) >= 400) {
      throw new Error(httpResponse.message);
    }

    return httpResponse;
  }
}
