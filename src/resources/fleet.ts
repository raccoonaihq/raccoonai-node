// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
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
   * A unique identifier for the created session.
   */
  session_id: string;

  /**
   * The current status of the session. Possible values include 'running', 'unknown',
   * or 'terminated'.
   */
  status: string;

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

export interface FleetStatusResponse {
  /**
   * A unique identifier for the session.
   */
  session_id: string;

  /**
   * The current status of the session. Possible values include 'running', 'unknown',
   * or 'terminated'.
   */
  status: string;
}

export interface FleetTerminateResponse {
  /**
   * A unique identifier for the session.
   */
  session_id: string;

  /**
   * The current status of the session. Possible values include 'running', 'unknown',
   * or 'terminated'.
   */
  status: string;
}

export interface FleetCreateParams {
  /**
   * Advanced configuration options for the session, such as ad-blocking and CAPTCHA
   * solving.
   */
  advanced?: FleetCreateParams.Advanced | null;

  /**
   * The name of the app for which the session is going to run for, used for
   * streamlining authentication.
   */
  app_name?: string | null;

  /**
   * The type of browser to use. Supported values include 'chromium', 'firefox', and
   * 'webkit'.
   */
  browser_type?: string | null;

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
     * Whether to use a proxy for the browser session.
     */
    proxy?: boolean | null;

    /**
     * Whether to attempt automatic CAPTCHA solving.
     */
    solve_captchas?: boolean | null;
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

export declare namespace Fleet {
  export {
    type FleetCreateResponse as FleetCreateResponse,
    type FleetLogsResponse as FleetLogsResponse,
    type FleetStatusResponse as FleetStatusResponse,
    type FleetTerminateResponse as FleetTerminateResponse,
    type FleetCreateParams as FleetCreateParams,
  };
}
