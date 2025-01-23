// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Run extends APIResource {
  /**
   * Lam Run Endpoint
   */
  create(body: RunCreateParams, options?: Core.RequestOptions): Core.APIPromise<RunCreateResponse> {
    return this._client.post('/lam/run', { body, ...options });
  }
}

export interface RunCreateResponse {
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

export interface RunCreateParams {
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
  chat_history?: Array<RunCreateParams.ChatHistory> | null;

  /**
   * The input query string for the request. This is typically the main prompt.
   */
  query?: string | null;

  /**
   * Whether the response should be streamed back or not.
   */
  stream?: boolean | null;
}

export namespace RunCreateParams {
  export interface ChatHistory {
    text?: string;

    userId?: string;
  }
}

export declare namespace Run {
  export { type RunCreateResponse as RunCreateResponse, type RunCreateParams as RunCreateParams };
}
