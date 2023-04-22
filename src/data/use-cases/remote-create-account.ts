import { type HttpClient } from '@/data/protocols';
import {
  type CreateAccountRequest,
  type CreateAccount,
} from '@/domain/use-cases';

export class RemoteCreateAccount implements CreateAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async execute(params: CreateAccountRequest): Promise<void> {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'POST',
      body: JSON.stringify({ ...params }),
      headers,
    });

    if (Number(httpResponse?.statusCode) >= 400) {
      throw new Error(httpResponse.message);
    }
  }
}
