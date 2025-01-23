// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ExtractAPI from './extract';
import { Extract, ExtractCreateParams, ExtractCreateResponse } from './extract';
import * as IntegrationAPI from './integration';
import { Integration, IntegrationRunParams, IntegrationRunResponse } from './integration';
import * as RunAPI from './run';
import { Run, RunCreateParams, RunCreateResponse } from './run';

export class Lam extends APIResource {
  run: RunAPI.Run = new RunAPI.Run(this._client);
  extract: ExtractAPI.Extract = new ExtractAPI.Extract(this._client);
  integration: IntegrationAPI.Integration = new IntegrationAPI.Integration(this._client);
}

Lam.Run = Run;
Lam.Extract = Extract;
Lam.Integration = Integration;

export declare namespace Lam {
  export { Run as Run, type RunCreateResponse as RunCreateResponse, type RunCreateParams as RunCreateParams };

  export {
    Extract as Extract,
    type ExtractCreateResponse as ExtractCreateResponse,
    type ExtractCreateParams as ExtractCreateParams,
  };

  export {
    Integration as Integration,
    type IntegrationRunResponse as IntegrationRunResponse,
    type IntegrationRunParams as IntegrationRunParams,
  };
}
