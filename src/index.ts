// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Fleet } from './resources/fleet/fleet';
import {
  Lam,
  LamRunParams,
  LamRunParamsNonStreaming,
  LamRunParamsStreaming,
  LamRunResponse,
} from './resources/lam/lam';
import { Tail } from './resources/tail/tail';

const environments = {
  production: 'https://api.raccoonai.tech',
  staging: 'https://staging.raccoonai.tech',
  local: 'http://localhost:3800',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * The API key required for authenticating requests with the Raccoon AI API.
   */
  secretKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.raccoonai.tech`
   * - `staging` corresponds to `https://staging.raccoonai.tech`
   * - `local` corresponds to `http://localhost:3800`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['RACCOON_AI_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 0
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Raccoon AI API.
 */
export class RaccoonAI extends Core.APIClient {
  secretKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Raccoon AI API.
   *
   * @param {string | undefined} [opts.secretKey=process.env['RACCOON_SECRET_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['RACCOON_AI_BASE_URL'] ?? https://api.raccoonai.tech] - Override the default base URL for the API.
   * @param {number} [opts.timeout=10 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=0] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('RACCOON_AI_BASE_URL'),
    secretKey = Core.readEnv('RACCOON_SECRET_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (secretKey === undefined) {
      throw new Errors.RaccoonAIError(
        "The RACCOON_SECRET_KEY environment variable is missing or empty; either provide it, or instantiate the RaccoonAI client with an secretKey option, like new RaccoonAI({ secretKey: 'My Secret Key' }).",
      );
    }

    const options: ClientOptions = {
      secretKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.RaccoonAIError(
        'Ambiguous URL; The `baseURL` option (or RACCOON_AI_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      baseURLOverridden: baseURL ? baseURL !== environments[options.environment || 'production'] : false,
      timeout: options.timeout ?? 600000 /* 10 minutes */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.secretKey = secretKey;
  }

  lam: API.Lam = new API.Lam(this);
  tail: API.Tail = new API.Tail(this);
  fleet: API.Fleet = new API.Fleet(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'raccoon-secret-key': this.secretKey };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static RaccoonAI = this;
  static DEFAULT_TIMEOUT = 600000; // 10 minutes

  static RaccoonAIError = Errors.RaccoonAIError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

RaccoonAI.Lam = Lam;
RaccoonAI.Tail = Tail;
RaccoonAI.Fleet = Fleet;
export declare namespace RaccoonAI {
  export type RequestOptions = Core.RequestOptions;

  export {
    Lam as Lam,
    type LamRunResponse as LamRunResponse,
    type LamRunParams as LamRunParams,
    type LamRunParamsNonStreaming as LamRunParamsNonStreaming,
    type LamRunParamsStreaming as LamRunParamsStreaming,
  };

  export { Tail as Tail };

  export { Fleet as Fleet };
}

export { toFile, fileFromPath } from './uploads';
export {
  RaccoonAIError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default RaccoonAI;
