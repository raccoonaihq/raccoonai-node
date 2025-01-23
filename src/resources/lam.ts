// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as LamAPI from './lam';
import { Stream } from '../streaming';

export class Lam extends APIResource {
  /**
   * Lam Run Endpoint
   */
  additionalProperties(
    body: LamAdditionalPropertiesParamsNonStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<LamRunStreamResponse>;
  additionalProperties(
    body: LamAdditionalPropertiesParamsStreaming,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamRunStreamResponse>>;
  additionalProperties(
    body: LamAdditionalPropertiesParamsBase,
    options?: Core.RequestOptions,
  ): APIPromise<Stream<LamRunStreamResponse> | LamRunStreamResponse>;
  additionalProperties(
    body: LamAdditionalPropertiesParams,
    options?: Core.RequestOptions,
  ): APIPromise<LamRunStreamResponse> | APIPromise<Stream<LamRunStreamResponse>> {
    return this._client.post('/lam/run', { body, ...options, stream: body.stream ?? false }) as
      | APIPromise<LamRunStreamResponse>
      | APIPromise<Stream<LamRunStreamResponse>>;
  }

  /**
   * Lam Extract Endpoint
   */
  extract(body: LamExtractParams, options?: Core.RequestOptions): Core.APIPromise<LamExtractResponse> {
    return this._client.post('/lam/extract', { body, ...options });
  }

  /**
   * Lam Integrations Endpoint
   */
  integrationRun(
    appName: string,
    body: LamIntegrationRunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LamIntegrationRunResponse> {
    return this._client.post(`/lam/${appName}/run`, { body, ...options });
  }

  /**
   * Lam Run Endpoint
   */
  run(body: LamRunParams, options?: Core.RequestOptions): Core.APIPromise<LamRunStreamResponse> {
    return this._client.post('/lam/run', { body, ...options });
  }
}

export interface LamRunStreamResponse {
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

export interface LamExtractResponse {
  /**
   * The extracted data as a list of objects when the status is DONE. Each object
   * represents an extracted entity.
   */
  data: Array<unknown>;

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

export type LamAdditionalPropertiesParams =
  | LamAdditionalPropertiesParamsNonStreaming
  | LamAdditionalPropertiesParamsStreaming;

export interface LamAdditionalPropertiesParamsBase {
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

export namespace LamAdditionalPropertiesParams {
  export type LamAdditionalPropertiesParamsNonStreaming = LamAPI.LamAdditionalPropertiesParamsNonStreaming;
  export type LamAdditionalPropertiesParamsStreaming = LamAPI.LamAdditionalPropertiesParamsStreaming;
}

export interface LamAdditionalPropertiesParamsNonStreaming extends LamAdditionalPropertiesParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream?: false | null;
}

export interface LamAdditionalPropertiesParamsStreaming extends LamAdditionalPropertiesParamsBase {
  /**
   * Whether the response should be streamed back or not.
   */
  stream: true;
}

export interface LamExtractParams {
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

export interface LamIntegrationRunParams {
  /**
   * The raccoon passcode associated with the end user on behalf of which the call is
   * being made.
   */
  raccoon_passcode: string;

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

export interface LamRunParams {
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

export declare namespace Lam {
  export {
    type LamRunStreamResponse as LamRunStreamResponse,
    type LamExtractResponse as LamExtractResponse,
    type LamIntegrationRunResponse as LamIntegrationRunResponse,
    type LamAdditionalPropertiesParams as LamAdditionalPropertiesParams,
    type LamAdditionalPropertiesParamsNonStreaming as LamAdditionalPropertiesParamsNonStreaming,
    type LamAdditionalPropertiesParamsStreaming as LamAdditionalPropertiesParamsStreaming,
    type LamExtractParams as LamExtractParams,
    type LamIntegrationRunParams as LamIntegrationRunParams,
    type LamRunParams as LamRunParams,
  };
}
