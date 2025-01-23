// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raccoonai from 'raccoonai';
import { Response } from 'node-fetch';

const client = new Raccoonai({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource run', () => {
  test('create: only required params', async () => {
    const responsePromise = client.lam.run.create({
      query: 'Find the price of iphone 16 on Amazon.',
      raccoon_passcode: '<end-user-raccoon-passcode>',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.lam.run.create({
      query: 'Find the price of iphone 16 on Amazon.',
      raccoon_passcode: '<end-user-raccoon-passcode>',
      app_url: 'https://www.amazon.com',
      chat_history: [{}],
      stream: true,
    });
  });
});
