// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Extract extends APIResource {
  /**
   * Lam Extract Endpoint
   */
  create(body: ExtractCreateParams, options?: Core.RequestOptions): Core.APIPromise<ExtractCreateResponse> {
    return this._client.post('/lam/extract', { body, ...options });
  }
}

export interface ExtractCreateResponse {
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

export interface ExtractCreateParams {
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

export declare namespace Extract {
  export {
    type ExtractCreateResponse as ExtractCreateResponse,
    type ExtractCreateParams as ExtractCreateParams,
  };
}
