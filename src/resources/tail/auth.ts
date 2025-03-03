// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Auth extends APIResource {
  /**
   * Get Auth Status Endpoint
   */
  status(query: AuthStatusParams, options?: Core.RequestOptions): Core.APIPromise<AuthStatusResponse> {
    return this._client.get('/tail/app/auth-status', { query, ...options });
  }
}

export interface AuthStatusResponse {
  /**
   * The name of the app for which the authentication status is checked
   */
  appName: string;

  /**
   * Authentication status.
   */
  status: 'unliked' | 'active';
}

export interface AuthStatusParams {
  appName: string;

  raccoonPasscode: string;
}

export declare namespace Auth {
  export { type AuthStatusResponse as AuthStatusResponse, type AuthStatusParams as AuthStatusParams };
}
