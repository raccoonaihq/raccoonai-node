// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as LamAPI from './lam';
import * as TasksAPI from './tasks';
import { TaskAllParams, TaskAllResponse, TaskMediaResponse, Tasks } from './tasks';
import { Stream } from '../../streaming';

export class Lam extends APIResource {
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

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

export interface LamRunResponse {
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
   * Additional metadata or details related to the run task.
   */
  properties: unknown;

  /**
   * The current status of the extraction task. For example: 'STARTING',
   * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
   */
  task_status: 'STARTING' | 'PROCESSING' | 'DONE' | 'HUMAN_INTERACTION' | 'FAILURE';
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
   * The maximum number of results to extract.
   */
  max_count?: number | null;

  /**
   * Mode of execution.
   */
  mode?: 'deepsearch' | 'default' | null;

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
     * list of extension ids
     */
    extension_ids?: Array<unknown> | null;

    /**
     * Proxy details for the browser session. Automatically defaults to True if
     * solve_captchas is on.
     */
    proxy?: Advanced.ProxySettings | boolean;

    /**
     * Whether to attempt automatic CAPTCHA solving.
     */
    solve_captchas?: boolean | null;
  }

  export namespace Advanced {
    export interface ProxySettings {
      /**
       * Target city.
       */
      city?: string | null;

      /**
       * Target country (2-letter ISO code).
       */
      country?: string | null;

      /**
       * Target state (2-letter code).
       */
      state?: string | null;

      /**
       * Target postal code.
       */
      zip?: number | null;
    }
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

Lam.Tasks = Tasks;

export declare namespace Lam {
  export {
    type LamRunResponse as LamRunResponse,
    type LamRunParams as LamRunParams,
    type LamRunParamsNonStreaming as LamRunParamsNonStreaming,
    type LamRunParamsStreaming as LamRunParamsStreaming,
  };

  export {
    Tasks as Tasks,
    type TaskAllResponse as TaskAllResponse,
    type TaskMediaResponse as TaskMediaResponse,
    type TaskAllParams as TaskAllParams,
  };
}
