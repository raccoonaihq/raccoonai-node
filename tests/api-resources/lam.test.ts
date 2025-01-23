// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import RaccoonAI from 'raccoonai';
import { Response } from 'node-fetch';

const client = new RaccoonAI({
  secretKey: 'My Secret Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource lam', () => {
  test('extract: only required params', async () => {
    const responsePromise = client.lam.extract({
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

  test('extract: required and optional params', async () => {
    const response = await client.lam.extract({
      query: 'Find YCombinator startups who got funded in W24.',
      raccoon_passcode: '<end-user-raccoon-passcode>',
      app_url: 'https://www.ycombinator.com/companies',
      chat_history: [{}],
      max_count: 5,
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

  test('integrationRun: only required params', async () => {
    const responsePromise = client.lam.integrationRun('app_name', { raccoon_passcode: 'raccoon_passcode' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('integrationRun: required and optional params', async () => {
    const response = await client.lam.integrationRun('app_name', {
      raccoon_passcode: 'raccoon_passcode',
      integration_id: 'integration_id',
      properties: {},
      stream: true,
    });
  });

  test('run: only required params', async () => {
    const responsePromise = client.lam.run({
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

  test('run: required and optional params', async () => {
    const response = await client.lam.run({
      query: 'Find the price of iphone 16 on Amazon.',
      raccoon_passcode: '<end-user-raccoon-passcode>',
      app_url: 'https://www.amazon.com',
      chat_history: [{}],
      stream: true,
    });
  });
});
