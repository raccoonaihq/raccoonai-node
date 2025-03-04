// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaccoonAI from 'raccoonai';
import { Response } from 'node-fetch';

const client = new RaccoonAI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('create', async () => {
    const responsePromise = client.fleet.sessions.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('all', async () => {
    const responsePromise = client.fleet.sessions.all();
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
    await expect(client.fleet.sessions.all({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      RaccoonAI.NotFoundError,
    );
  });

  test('all: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fleet.sessions.all(
        {
          end_time: 1678972800000,
          executionType: ['run'],
          limit: 15,
          page: 2,
          raccoon_passcode: 'code456',
          session_id: 'session_456',
          sort_by: 'timestamp',
          sort_order: 'ascend',
          start_time: 1678886400000,
          task_id: 'task_123',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('logs', async () => {
    const responsePromise = client.fleet.sessions.logs('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('logs: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fleet.sessions.logs('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('media', async () => {
    const responsePromise = client.fleet.sessions.media('sessionId');
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
    await expect(
      client.fleet.sessions.media('sessionId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('status', async () => {
    const responsePromise = client.fleet.sessions.status('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('status: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fleet.sessions.status('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('terminate', async () => {
    const responsePromise = client.fleet.sessions.terminate('session_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('terminate: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fleet.sessions.terminate('session_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });
});
