// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaccoonAI, { toFile } from 'raccoonai';
import { Response } from 'node-fetch';

const client = new RaccoonAI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource extensions', () => {
  test('delete', async () => {
    const responsePromise = client.fleet.extensions.delete('extensionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fleet.extensions.delete('extensionId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('all', async () => {
    const responsePromise = client.fleet.extensions.all();
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
    await expect(client.fleet.extensions.all({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      RaccoonAI.NotFoundError,
    );
  });

  test('get', async () => {
    const responsePromise = client.fleet.extensions.get('extensionId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.fleet.extensions.get('extensionId', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(RaccoonAI.NotFoundError);
  });

  test('upload: only required params', async () => {
    const responsePromise = client.fleet.extensions.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('upload: required and optional params', async () => {
    const response = await client.fleet.extensions.upload({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });
});
