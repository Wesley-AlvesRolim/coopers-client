import { type HttpClient } from '@/data/protocols';
import {
  type LoginRequest,
  type LoginResponse,
  type Login,
} from '@/domain/use-cases';

export class RemoteLogin implements Login {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async execute(params: LoginRequest): Promise<LoginResponse> {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const user = await this.httpClient.request({
      url: this.url,
      method: 'POST',
      body: JSON.stringify({ ...params }),
      headers,
    });

    return user;
  }
}
