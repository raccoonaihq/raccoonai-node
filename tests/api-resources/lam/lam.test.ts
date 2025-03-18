// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaccoonAI from 'raccoonai';
import { Response } from 'node-fetch';

const client = new RaccoonAI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lam', () => {
  test('run: only required params', async () => {
    const responsePromise = client.lam.run({
      query: 'Find YCombinator startups who got funded in W24.',
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

  test('run: required and optional params', async () => {
    const response = await client.lam.run({
      query: 'Find YCombinator startups who got funded in W24.',
      raccoon_passcode: '<end-user-raccoon-passcode>',
      advanced: {
        block_ads: true,
        extension_ids: ['df2399ea-a938-438f-9d4b-ef3bc95cf8af'],
        proxy: { city: 'sanfrancisco', country: 'us', state: 'ca', zip: 94102 },
        solve_captchas: true,
      },
      app_url: 'https://www.ycombinator.com/companies',
      chat_history: [{}],
      max_count: 5,
      mode: 'deepsearch',
      schema: {
        address: {
          city: 'What city is the company located in?',
          country: 'Which country is the company located in?',
        },
        funding_season: 'The funding season like W24 as a string',
        name: 'Name of the company as a string',
      },
      stream: false,
    });
  });
});
