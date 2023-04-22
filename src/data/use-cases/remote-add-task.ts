import { type HttpClient } from '@/data/protocols';
import {
  type AddTaskRequest,
  type AddTaskResponse,
  type AddTask,
} from '@/domain/use-cases';

export class RemoteAddTask implements AddTask {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async add({ task }: AddTaskRequest): Promise<AddTaskResponse> {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'POST',
      body: JSON.stringify({
        description: task.description,
        isDone: task.isDone,
        authorId: task.authorId,
      }),
      headers,
    });

    if (Number(httpResponse?.statusCode) >= 400) {
      throw new Error(httpResponse.message);
    }

    return httpResponse;
  }
}
