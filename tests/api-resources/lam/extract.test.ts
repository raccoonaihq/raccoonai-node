// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Raccoonai from 'raccoonai';
import { Response } from 'node-fetch';

const client = new Raccoonai({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource extract', () => {
  test('create: only required params', async () => {
    const responsePromise = client.lam.extract.create({ raccoon_passcode: '<end-user-raccoon-passcode>' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.lam.extract.create({
      raccoon_passcode: '<end-user-raccoon-passcode>',
      app_url: 'https://www.ycombinator.com/companies',
      chat_history: [{ text: 'text', userId: 'userId' }],
      max_count: 5,
      query: 'Find YCombinator startups who got funded in W24.',
      schema: {
        address: {
          city: 'What city is the company located in?',
          country: 'Which country is the company located in?',
        },
        funding_season: 'The funding season like W24 as a string',
        name: 'Name of the company as a string',
      },
      stream: true,
    });
  });
});
