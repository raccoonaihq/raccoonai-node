// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as LamAPI from './lam';
import { Stream } from '../streaming';

export class Lam extends APIResource {
  /**
   * Lam Extract Endpoint
   */
  extract(body: LamExtractParamsNonStreaming, options?: Core.RequestOptions): APIPromise<LamExtractResponse>;
  extract(
    body: LamExtractParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamExtractResponse>>;
  extract(
    body: LamExtractParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamExtractResponse> | LamExtractResponse>;
  extract(
    body: LamExtractParams,
    options?: Core.RequestOptions,
  ): APIPromise<LamExtractResponse> | APIPromise<Stream<LamExtractResponse>> {
    return this._client.post('/lam/extract', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<LamExtractResponse>
      | APIPromise<Stream<LamExtractResponse>>;
  }

  /**
   * Lam Integrations Endpoint
   */
  integrationRun(
    appName: string,
    body: LamIntegrationRunParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<LamIntegrationRunResponse>;
  integrationRun(
    appName: string,
    body: LamIntegrationRunParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamIntegrationRunResponse>>;
  integrationRun(
    appName: string,
    body: LamIntegrationRunParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamIntegrationRunResponse> | LamIntegrationRunResponse>;
  integrationRun(
    appName: string,
    body: LamIntegrationRunParams,
    options?: Core.RequestOptions,
  ): APIPromise<LamIntegrationRunResponse> | APIPromise<Stream<LamIntegrationRunResponse>> {
    return this._client.post(`/lam/${appName}/run`, { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<LamIntegrationRunResponse>
      | APIPromise<Stream<LamIntegrationRunResponse>>;
  }

  /**
   * Lam Run Endpoint
   */
  run(body: LamRunParamsNonStreaming, options?: Core.RequestOptions): APIPromise<LamRunResponse>;
  run(body: LamRunParamsStreaming, options?: Core.RequestOptions): APIPromise<Stream<LamRunResponse>>;
  run(
    body: LamRunParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamRunResponse> | LamRunResponse>;
  run(
    body: LamRunParams,
    options?: Core.RequestOptions,
  ): APIPromise<LamRunResponse> | APIPromise<Stream<LamRunResponse>> {
    return this._client.post('/lam/run', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<LamRunResponse>
      | APIPromise<Stream<LamRunResponse>>;
  }
}

export interface LamExtractResponse {
  /**
   * The extracted data as a list of objects when the status is DONE. Each object
   * represents an extracted entity.
   */
  data: Array<unknown>;

  /**
   * The Livestream URL
   */
  livestream_url: string;

  /**
   * A message providing the thought summary if the status is processing currently.
   */
  message: string;

  /**
   * Additional metadata or information related to the extraction task.
   */
  properties: unknown;

  /**
   * The current status of the extraction task. For example: 'STARTING',
   * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
   */
  task_status: string;
}

export type LamIntegrationRunResponse =
  | Array<LamIntegrationRunResponse.UnionMember0>
  | LamIntegrationRunResponse.IntegrationResponse;

export namespace LamIntegrationRunResponse {
  export interface UnionMember0 {
    /**
     * A unique identifier for the integration in use.
     */
    integration_id: string;

    /**
     * The Livestream URL
     */
    livestream_url: string;

    /**
     * A message providing the thought summary if the status is processing currently.
     */
    message: string;

    /**
     * Additional metadata or details related to the integration task.
     */
    properties: unknown;

    /**
     * The current status of the extraction task. For example: 'STARTING',
     * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
     */
    task_status: string;
  }

  export interface IntegrationResponse {
    /**
     * A unique identifier for the integration in use.
     */
    integration_id: string;

    /**
     * The Livestream URL
     */
    livestream_url: string;

    /**
     * A message providing the thought summary if the status is processing currently.
     */
    message: string;

    /**
     * Additional metadata or details related to the integration task.
     */
    properties: unknown;

    /**
     * The current status of the extraction task. For example: 'STARTING',
     * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
     */
    task_status: string;
  }
}

export interface LamRunResponse {
  /**
   * The Livestream URL
   */
  livestream_url: string;

  /**
   * A message providing the thought summary if the status is processing currently.
   */
  message: string;

  /**
   * Additional metadata or details related to the run task.
   */
  properties: unknown;

  /**
   * The current status of the extraction task. For example: 'STARTING',
   * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
   */
  task_status: string;
}

export type LamExtractParams = LamExtractParamsNonStreaming | LamExtractParamsStreaming;

export interface LamExtractParamsBase {
  /**
   * The input query string for the request. This is typically the main prompt.
   */
  query: string;

  /**
   * The raccoon passcode associated with the end user on behalf of which the call is
   * being made.
   */
  raccoon_passcode: string;

  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  advanced?: LamExtractParams.Advanced | null;

  /**
   * This is the entrypoint URL for the web agent.
   */
  app_url?: string | null;

  /**
   * The history of the conversation as a list of messages or objects you might use
   * while building a chat app to give the model context of the past conversation.
   */
  chat_history?: Array<unknown> | null;

  /**
   * The maximum number of results to extract.
   */
  max_count?: number | null;

  /**
   * The expected schema for the response. This is a dictionary where the keys
   * describe the fields and the values describe their purposes.
   */
  schema?: unknown;

  /**
   * Whether the response should be streamed back or not.
   */
  stream?: boolean | null;
}

export namespace LamExtractParams {
  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  export interface Advanced {
    /**
     * Whether to block advertisements during the browser session.
     */
    block_ads?: boolean | null;

    /**
     * Whether to use a proxy for the browser session.
     */
    proxy?: boolean | null;

    /**
     * Whether to attempt automatic CAPTCHA solving.
     */
    solve_captchas?: boolean | null;
  }

  export type LamExtractParamsNonStreaming = LamAPI.LamExtractParamsNonStreaming;
  export type LamExtractParamsStreaming = LamAPI.LamExtractParamsStreaming;
}

export interface LamExtractParamsNonStreaming extends LamExtractParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream?: false | null;
}

export interface LamExtractParamsStreaming extends LamExtractParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream: true;
}

export type LamIntegrationRunParams = LamIntegrationRunParamsNonStreaming | LamIntegrationRunParamsStreaming;

export interface LamIntegrationRunParamsBase {
  /**
   * The raccoon passcode associated with the end user on behalf of which the call is
   * being made.
   */
  raccoon_passcode: string;

  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  advanced?: LamIntegrationRunParams.Advanced | null;

  /**
   * The unique identifier for the integration being called.
   */
  integration_id?: string | null;

  /**
   * Additional properties or data related to the particular integration.
   */
  properties?: unknown | null;

  /**
   * Whether the response should be streamed back or not.
   */
  stream?: boolean | null;
}

export namespace LamIntegrationRunParams {
  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  export interface Advanced {
    /**
     * Whether to block advertisements during the browser session.
     */
    block_ads?: boolean | null;

    /**
     * Whether to use a proxy for the browser session.
     */
    proxy?: boolean | null;

    /**
     * Whether to attempt automatic CAPTCHA solving.
     */
    solve_captchas?: boolean | null;
  }

  export type LamIntegrationRunParamsNonStreaming = LamAPI.LamIntegrationRunParamsNonStreaming;
  export type LamIntegrationRunParamsStreaming = LamAPI.LamIntegrationRunParamsStreaming;
}

export interface LamIntegrationRunParamsNonStreaming extends LamIntegrationRunParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream?: false | null;
}

export interface LamIntegrationRunParamsStreaming extends LamIntegrationRunParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream: true;
}

export type LamRunParams = LamRunParamsNonStreaming | LamRunParamsStreaming;

export interface LamRunParamsBase {
  /**
   * The input query string for the request. This is typically the main prompt.
   */
  query: string;

  /**
   * The raccoon passcode associated with the end user on behalf of which the call is
   * being made.
   */
  raccoon_passcode: string;

  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  advanced?: LamRunParams.Advanced | null;

  /**
   * This is the entrypoint URL for the web agent.
   */
  app_url?: string | null;

  /**
   * The history of the conversation as a list of messages or objects you might use
   * while building a chat app to give the model context of the past conversation.
   */
  chat_history?: Array<unknown> | null;

  /**
   * Whether the response should be streamed back or not.
   */
  stream?: boolean | null;
}

export namespace LamRunParams {
  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  export interface Advanced {
    /**
     * Whether to block advertisements during the browser session.
     */
    block_ads?: boolean | null;

    /**
     * Whether to use a proxy for the browser session.
     */
    proxy?: boolean | null;

    /**
     * Whether to attempt automatic CAPTCHA solving.
     */
    solve_captchas?: boolean | null;
  }

  export type LamRunParamsNonStreaming = LamAPI.LamRunParamsNonStreaming;
  export type LamRunParamsStreaming = LamAPI.LamRunParamsStreaming;
}

export interface LamRunParamsNonStreaming extends LamRunParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream?: false | null;
}

export interface LamRunParamsStreaming extends LamRunParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream: true;
}

export declare namespace Lam {
  export {
    type LamExtractResponse as LamExtractResponse,
    type LamIntegrationRunResponse as LamIntegrationRunResponse,
    type LamRunResponse as LamRunResponse,
    type LamExtractParams as LamExtractParams,
    type LamExtractParamsNonStreaming as LamExtractParamsNonStreaming,
    type LamExtractParamsStreaming as LamExtractParamsStreaming,
    type LamIntegrationRunParams as LamIntegrationRunParams,
    type LamIntegrationRunParamsNonStreaming as LamIntegrationRunParamsNonStreaming,
    type LamIntegrationRunParamsStreaming as LamIntegrationRunParamsStreaming,
    type LamRunParams as LamRunParams,
    type LamRunParamsNonStreaming as LamRunParamsNonStreaming,
    type LamRunParamsStreaming as LamRunParamsStreaming,
  };
}
