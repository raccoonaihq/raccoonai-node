// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaccoonAI from 'raccoonai';
import { Response } from 'node-fetch';

const client = new RaccoonAI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  test('all', async () => {
    const responsePromise = client.lam.tasks.all();
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
    await expect(client.lam.tasks.all({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      RaccoonAI.NotFoundError,
    );
  });

  test('all: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.lam.tasks.all(
        {
          end_time: 1678972800000,
          executionType: ['run', 'extract'],
          limit: 20,
          page: 1,
          raccoon_passcode: 'code123',
          sort_by: 'timestamp',
          sort_order: 'ascend',
          start_time: 1678886400000,
          task_id: 'task_123',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('media', async () => {
    const responsePromise = client.lam.tasks.media('taskId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('media: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.lam.tasks.media('taskId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      RaccoonAI.NotFoundError,
    );
  });
});
