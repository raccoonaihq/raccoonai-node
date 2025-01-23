// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Integration extends APIResource {
  /**
   * Lam Integrations Endpoint
   */
  run(
    appName: string,
    body: IntegrationRunParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IntegrationRunResponse> {
    return this._client.post(`/lam/${appName}/run`, { body, ...options });
  }
}

export type IntegrationRunResponse =
  | Array<IntegrationRunResponse.UnionMember0>
  | IntegrationRunResponse.IntegrationResponse;

export namespace IntegrationRunResponse {
  export interface UnionMember0 {
    /**
     * A unique identifier for the integration in use.
     */
    integration_id: string;

    /**
     * A message providing the thought summary if the status is processing currently.
     */
    message: string;

    /**
     * Additional metadata or details related to the integration task.
     */
    properties: unknown;

    /**
     * The current status of the extraction task. For example: 'STARTING',
     * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
     */
    task_status: string;
  }

  export interface IntegrationResponse {
    /**
     * A unique identifier for the integration in use.
     */
    integration_id: string;

    /**
     * A message providing the thought summary if the status is processing currently.
     */
    message: string;

    /**
     * Additional metadata or details related to the integration task.
     */
    properties: unknown;

    /**
     * The current status of the extraction task. For example: 'STARTING',
     * 'PROCESSING', 'DONE', 'HUMAN_INTERACTION', or 'FAILURE'.
     */
    task_status: string;
  }
}

export interface IntegrationRunParams {
  /**
   * The raccoon passcode associated with the end user on behalf of which the call is
   * being made.
   */
  raccoon_passcode: string;

  /**
   * The unique identifier for the integration being called.
   */
  integration_id?: string | null;

  /**
   * Additional properties or data related to the particular integration.
   */
  properties?: unknown | null;

  /**
   * Whether the response should be streamed back or not.
   */
  stream?: boolean | null;
}

export declare namespace Integration {
  export {
    type IntegrationRunResponse as IntegrationRunResponse,
    type IntegrationRunParams as IntegrationRunParams,
  };
}
