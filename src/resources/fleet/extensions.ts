// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Extensions extends APIResource {
  /**
   * Delete Extension Endpoint
   */
  delete(extensionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.delete(`/extensions/${extensionId}`, options);
  }

  /**
   * List Extensions Endpoint
   */
  all(options?: Core.RequestOptions): Core.APIPromise<ExtensionAllResponse> {
    return this._client.get('/extensions', options);
  }

  /**
   * Get Extension Endpoint
   */
  get(extensionId: string, options?: Core.RequestOptions): Core.APIPromise<ExtensionGetResponse> {
    return this._client.get(`/extensions/${extensionId}`, options);
  }

  /**
   * Upload Extension Endpoint
   */
  upload(
    body: ExtensionUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ExtensionUploadResponse> {
    return this._client.post('/extensions', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export type ExtensionDeleteResponse = unknown;

export interface ExtensionAllResponse {
  /**
   * List of extensions.
   */
  extensions: Array<ExtensionAllResponse.Extension>;
}

export namespace ExtensionAllResponse {
  export interface Extension {
    /**
     * Unique identifier for the extension.
     */
    extensionId: string;

    /**
     * Name of the extension file.
     */
    filename: string;
  }
}

export interface ExtensionGetResponse {
  /**
   * Unique identifier for the extension.
   */
  extensionId: string;

  /**
   * Name of the extension file.
   */
  filename: string;
}

export interface ExtensionUploadResponse {
  /**
   * Unique identifier for the extension.
   */
  extensionId: string;

  /**
   * Name of the extension file.
   */
  filename: string;
}

export interface ExtensionUploadParams {
  file: Core.Uploadable;
}

export declare namespace Extensions {
  export {
    type ExtensionDeleteResponse as ExtensionDeleteResponse,
    type ExtensionAllResponse as ExtensionAllResponse,
    type ExtensionGetResponse as ExtensionGetResponse,
    type ExtensionUploadResponse as ExtensionUploadResponse,
    type ExtensionUploadParams as ExtensionUploadParams,
  };
}
