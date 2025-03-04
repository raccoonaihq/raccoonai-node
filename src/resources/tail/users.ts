// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Users extends APIResource {
  /**
   * Create User Endpoint
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserCreateResponse> {
    return this._client.post('/tail/users/create', { body, ...options });
  }

  /**
   * Get Users Endpoint
   */
  all(query?: UserAllParams, options?: Core.RequestOptions): Core.APIPromise<UserAllResponse>;
  all(options?: Core.RequestOptions): Core.APIPromise<UserAllResponse>;
  all(
    query: UserAllParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAllResponse> {
    if (isRequestOptions(query)) {
      return this.all({}, query);
    }
    return this._client.get('/tail/users', { query, ...options });
  }

  /**
   * Get Auth Status Endpoint
   */
  status(query: UserStatusParams, options?: Core.RequestOptions): Core.APIPromise<UserStatusResponse> {
    return this._client.get('/tail/app/auth-status', { query, ...options });
  }
}

export interface UserCreateResponse {
  /**
   * Email of the created user.
   */
  email: string;

  /**
   * Name of the created user.
   */
  name: string;

  /**
   * Raccoon passcode associated with the user.
   */
  raccoonPasscode: string;

  /**
   * If user was created successfully.
   */
  success: boolean;
}

export interface UserAllResponse {
  /**
   * Admin Raccoon passcode.
   */
  adminRaccoonPasscode: string;

  /**
   * Metadata about the user list.
   */
  meta: UserAllResponse.Meta;

  /**
   * List of users.
   */
  users: Array<UserAllResponse.User>;
}

export namespace UserAllResponse {
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

export interface UserStatusResponse {
  /**
   * The name of the app for which the authentication status is checked
   */
  appName: string;

  /**
   * Authentication status.
   */
  status: 'unliked' | 'active';
}

export interface UserCreateParams {
  /**
   * specify email of user.
   */
  email: string;

  /**
   * specify name of user.
   */
  name: string;
}

export interface UserAllParams {
  emailId?: string | null;

  limit?: number | null;

  page?: number | null;

  raccoonPasscode?: string | null;

  searchQuery?: string | null;

  sortBy?: 'createdAt' | 'name' | 'email' | 'raccoonPasscode' | null;

  sortOrder?: 'ascend' | 'descend' | null;
}

export interface UserStatusParams {
  appName: string;

  raccoonPasscode: string;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserAllResponse as UserAllResponse,
    type UserStatusResponse as UserStatusResponse,
    type UserCreateParams as UserCreateParams,
    type UserAllParams as UserAllParams,
    type UserStatusParams as UserStatusParams,
  };
}
