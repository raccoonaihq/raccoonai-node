// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Apps extends APIResource {
  /**
   * Get Apps Endpoint
   */
  all(options?: Core.RequestOptions): Core.APIPromise<AppAllResponse> {
    return this._client.get('/tail/apps', options);
  }

  /**
   * Get Linked Apps Endpoint
   */
  linked(query: AppLinkedParams, options?: Core.RequestOptions): Core.APIPromise<AppLinkedResponse> {
    return this._client.get('/tail/linked-apps', { query, ...options });
  }
}

export interface AppAllResponse {
  /**
   * List of available applications.
   */
  availableApps: Array<AppAllResponse.AvailableApp>;
}

export namespace AppAllResponse {
  export interface AvailableApp {
    /**
     * Unique identifier for the application.
     */
    appName: string;

    /**
     * Category of the application (e.g., 'Productivity', 'Social').
     */
    category: string;

    /**
     * Display name of the application.
     */
    displayName: string;

    /**
     * Status of the application.
     */
    status: 'Active' | 'In Review' | 'Not Accepted';

    /**
     * A brief description of the application.
     */
    appDescription?: string | null;

    /**
     * URL of the application.
     */
    appUrl?: string | null;

    /**
     * URL of the application icon.
     */
    icon?: string | null;
  }
}

export interface AppLinkedResponse {
  /**
   * List of linked application names.
   */
  linkedApps: Array<string>;
}

export interface AppLinkedParams {
  raccoonPasscode: string;
}

export declare namespace Apps {
  export {
    type AppAllResponse as AppAllResponse,
    type AppLinkedResponse as AppLinkedResponse,
    type AppLinkedParams as AppLinkedParams,
  };
}
