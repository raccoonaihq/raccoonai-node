// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AppsAPI from './apps';
import { AppAllResponse, AppLinkedParams, AppLinkedResponse, Apps } from './apps';
import * as AuthAPI from './auth';
import { Auth, AuthStatusParams, AuthStatusResponse } from './auth';

export class Tail extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);

  /**
   * Get Users Endpoint
   */
  users(query?: TailUsersParams, options?: Core.RequestOptions): Core.APIPromise<TailUsersResponse>;
  users(options?: Core.RequestOptions): Core.APIPromise<TailUsersResponse>;
  users(
    query: TailUsersParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TailUsersResponse> {
    if (isRequestOptions(query)) {
      return this.users({}, query);
    }
    return this._client.get('/tail/users', { query, ...options });
  }
}

export interface TailUsersResponse {
  /**
   * Admin Raccoon passcode.
   */
  adminRaccoonPasscode: string;

  /**
   * Metadata about the user list.
   */
  meta: TailUsersResponse.Meta;

  /**
   * List of users.
   */
  users: Array<TailUsersResponse.User>;
}

export namespace TailUsersResponse {
  /**
   * Metadata about the user list.
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

  export interface User {
    /**
     * URL of the user's avatar image.
     */
    avatar: string;

    /**
     * Unix timestamp (in milliseconds) indicating when the user account was created.
     */
    createdAt: number;

    /**
     * User's email address.
     */
    email: string;

    /**
     * User's full name.
     */
    name: string;

    /**
     * Passcode associated with the user.
     */
    raccoonPasscode: string;
  }
}

export interface TailUsersParams {
  emailId?: string | null;

  limit?: number | null;

  page?: number | null;

  raccoonPasscode?: string | null;

  searchQuery?: string | null;

  sortBy?: 'createdAt' | 'name' | 'email' | 'raccoonPasscode' | null;

  sortOrder?: 'ascend' | 'descend' | null;
}

Tail.Apps = Apps;
Tail.Auth = Auth;

export declare namespace Tail {
  export { type TailUsersResponse as TailUsersResponse, type TailUsersParams as TailUsersParams };

  export {
    Apps as Apps,
    type AppAllResponse as AppAllResponse,
    type AppLinkedResponse as AppLinkedResponse,
    type AppLinkedParams as AppLinkedParams,
  };

  export {
    Auth as Auth,
    type AuthStatusResponse as AuthStatusResponse,
    type AuthStatusParams as AuthStatusParams,
  };
}
