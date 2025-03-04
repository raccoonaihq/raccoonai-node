// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaccoonAI from 'raccoonai';
import { Response } from 'node-fetch';

const client = new RaccoonAI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  test('create: only required params', async () => {
    const responsePromise = client.tail.users.create({ email: 'john.doe@example.com', name: 'john' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.tail.users.create({ email: 'john.doe@example.com', name: 'john' });
  });

  test('all', async () => {
    const responsePromise = client.tail.users.all();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('all: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.tail.users.all({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      RaccoonAI.NotFoundError,
    );
  });

  test('all: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tail.users.all(
        {
          emailId: 'emailId',
          limit: 1,
          page: 1,
          raccoonPasscode: 'raccoonPasscode',
          searchQuery: 'searchQuery',
          sortBy: 'createdAt',
          sortOrder: 'ascend',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('status: only required params', async () => {
    const responsePromise = client.tail.users.status({
      appName: 'appName',
      raccoonPasscode: 'raccoonPasscode',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: required and optional params', async () => {
    const response = await client.tail.users.status({
      appName: 'appName',
      raccoonPasscode: 'raccoonPasscode',
    });
  });
});
