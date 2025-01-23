// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raccoonai from 'raccoonai';
import { Response } from 'node-fetch';

const client = new Raccoonai({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource integration', () => {
  test('run: only required params', async () => {
    const responsePromise = client.lam.integration.run('app_name', { raccoon_passcode: 'raccoon_passcode' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('run: required and optional params', async () => {
    const response = await client.lam.integration.run('app_name', {
      raccoon_passcode: 'raccoon_passcode',
      integration_id: 'integration_id',
      properties: {},
      stream: true,
    });
  });
});
