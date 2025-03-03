// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AppsAPI from './apps';
import { AppAllResponse, AppLinkedParams, AppLinkedResponse, Apps } from './apps';
import * as AuthAPI from './auth';
import { Auth, AuthStatusParams, AuthStatusResponse } from './auth';

export class Tail extends APIResource {
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
  auth: AuthAPI.Auth = new AuthAPI.Auth(this._client);
}

Tail.Apps = Apps;
Tail.Auth = Auth;

export declare namespace Tail {
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
