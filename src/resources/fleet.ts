// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Fleet extends APIResource {
  /**
   * Fleet Websocket Session Create Endpoint
   */
  create(body: FleetCreateParams, options?: Core.RequestOptions): Core.APIPromise<FleetCreateResponse> {
    return this._client.post('/sessions/create', { body, ...options });
  }

  /**
   * Fleet Session Logs Endpoint
   */
  logs(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<FleetLogsResponse> {
    return this._client.get(`/sessions/${sessionId}/logs`, options);
  }

  /**
   * Get Sessions Endpoint
   */
  sessions(
    query?: FleetSessionsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FleetSessionsResponse>;
  sessions(options?: Core.RequestOptions): Core.APIPromise<FleetSessionsResponse>;
  sessions(
    query: FleetSessionsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FleetSessionsResponse> {
    if (isRequestOptions(query)) {
      return this.sessions({}, query);
    }
    return this._client.get('/sessions', { query, ...options });
  }

  /**
   * Fleet Session Status Endpoint
   */
  status(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<FleetStatusResponse> {
    return this._client.get(`/sessions/${sessionId}/status`, options);
  }

  /**
   * Fleet Session Terminate Endpoint
   */
  terminate(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<FleetTerminateResponse> {
    return this._client.delete(`/sessions/${sessionId}/terminate`, options);
  }
}

export interface FleetCreateResponse {
  /**
   * The Livestream URL
   */
  livestream_url: string;

  /**
   * A unique identifier for the created session.
   */
  session_id: string;

  /**
   * The current status of the session.
   */
  status: 'starting' | 'running' | 'terminated' | 'completed' | 'unknown';

  /**
   * The WebSocket URL for interacting with the session.
   */
  websocket_url: string;
}

export interface FleetLogsResponse {
  /**
   * A unique identifier for the session.
   */
  session_id: string;

  /**
   * A dictionary containing the browser console logs for the session.
   */
  session_logs: unknown;
}

export interface FleetSessionsResponse {
  /**
   * Metadata about the session list.
   */
  meta: FleetSessionsResponse.Meta;

  /**
   * List of sessions.
   */
  sessions: Array<FleetSessionsResponse.Session>;
}

export namespace FleetSessionsResponse {
  /**
   * Metadata about the session list.
   */
  export interface Meta {
    /**
     * The current page number.
     */
    currentPage: number;

    /**
     * Total number of pages available.
     */
    totalPages: number;

    /**
     * Total number of records across all pages.
     */
    totalRecords: number;
  }

  export interface Session {
    /**
     * Time taken for the session execution (in milliseconds).
     */
    executionTime: number;

    /**
     * The type of execution performed (e.g., 'run', 'extract').
     */
    executionType: 'run' | 'extract' | 'fleet';

    /**
     * Input parameters used for the session.
     */
    inputs: unknown;

    /**
     * Output generated by the session.
     */
    output: Array<unknown>;

    /**
     * Passcode associated with the user.
     */
    raccoonPasscode: string;

    /**
     * Unique identifier for the session.
     */
    sessionId: string;

    /**
     * Current status of the session.
     */
    status: 'success' | 'failure' | 'running';

    /**
     * Unique identifier for the associated task.
     */
    taskId: string;

    /**
     * Unix timestamp (in milliseconds) indicating when the session was created.
     */
    timestamp: number;
  }
}

export interface FleetStatusResponse {
  /**
   * A unique identifier for the session.
   */
  session_id: string;

  /**
   * The current status of the session.
   */
  status: 'starting' | 'running' | 'terminated' | 'completed' | 'unknown';
}

export interface FleetTerminateResponse {
  /**
   * A unique identifier for the session.
   */
  session_id: string;

  /**
   * The current status of the session.
   */
  status: 'starting' | 'running' | 'terminated' | 'completed' | 'unknown';
}

export interface FleetCreateParams {
  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  advanced?: FleetCreateParams.Advanced | null;

  /**
   * The type of browser to use. Supported values include 'chromium', 'firefox', and
   * 'webkit'.
   */
  browser_type?: 'chromium' | 'firefox' | 'webkit' | null;

  /**
   * Whether to run the browser in headless mode.
   */
  headless?: boolean | null;

  /**
   * The raccoon passcode associated with the end user on behalf of which the call is
   * being made if any.
   */
  raccoon_passcode?: string | null;

  /**
   * The timeout for the browser session in seconds.
   */
  session_timeout?: number | null;

  /**
   * Configuration settings for the browser, such as viewport size and User-Agent
   * string.
   */
  settings?: FleetCreateParams.Settings | null;

  /**
   * The entrypoint url for the session.
   */
  url?: string | null;
}

export namespace FleetCreateParams {
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
     * Proxy details for the browser session.
     */
    proxy?: Advanced.Proxy | null;

    /**
     * Whether to attempt automatic CAPTCHA solving.
     */
    solve_captchas?: boolean | null;
  }

  export namespace Advanced {
    /**
     * Proxy details for the browser session.
     */
    export interface Proxy {
      /**
       * Target city.
       */
      city?: string | null;

      /**
       * Target country (2-letter ISO code).
       */
      country?: string | null;

      /**
       * Whether to use a proxy for the browser session.
       */
      enable?: boolean;

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

  /**
   * Configuration settings for the browser, such as viewport size and User-Agent
   * string.
   */
  export interface Settings {
    /**
     * A list of locales or languages to use for the browser session. These determine
     * language preferences.
     */
    locales?: Array<string> | null;

    /**
     * The User-Agent string to use for the browser. Defaults to internal auto
     * user-agent rotation mechanism.
     */
    user_agent?: string | null;

    /**
     * The viewport size (screen dimensions) for the browser in pixels.
     */
    viewport?: Record<string, number> | null;
  }
}

export interface FleetSessionsParams {
  /**
   * Filter sessions created before this Unix timestamp (in milliseconds).
   */
  end_time?: number | null;

  /**
   * Filter sessions by execution type (e.g., 'run', 'extract').
   */
  executionType?: Array<'run' | 'extract' | 'fleet'> | null;

  /**
   * Number of sessions per page (maximum 100).
   */
  limit?: number | null;

  /**
   * Page number for pagination.
   */
  page?: number | null;

  /**
   * Filter sessions by Raccoon passcode.
   */
  raccoon_passcode?: string | null;

  /**
   * Filter sessions by a specific session ID.
   */
  session_id?: string | null;

  /**
   * Field to sort sessions by (e.g., 'timestamp', 'executionTime').
   */
  sort_by?: 'timestamp' | 'executionTime' | 'taskId' | 'status' | 'executionType' | null;

  /**
   * Sort order ('ascend' or 'descend').
   */
  sort_order?: 'ascend' | 'descend' | null;

  /**
   * Filter sessions created after this Unix timestamp (in milliseconds).
   */
  start_time?: number | null;

  /**
   * Filter sessions by a specific task ID.
   */
  task_id?: string | null;
}

export declare namespace Fleet {
  export {
    type FleetCreateResponse as FleetCreateResponse,
    type FleetLogsResponse as FleetLogsResponse,
    type FleetSessionsResponse as FleetSessionsResponse,
    type FleetStatusResponse as FleetStatusResponse,
    type FleetTerminateResponse as FleetTerminateResponse,
    type FleetCreateParams as FleetCreateParams,
    type FleetSessionsParams as FleetSessionsParams,
  };
}
