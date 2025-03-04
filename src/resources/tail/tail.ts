// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AppsAPI from './apps';
import { AppAllResponse, AppLinkedParams, AppLinkedResponse, Apps } from './apps';
import * as UsersAPI from './users';
import {
  UserAllParams,
  UserAllResponse,
  UserCreateParams,
  UserCreateResponse,
  UserStatusParams,
  UserStatusResponse,
  Users,
} from './users';

export class Tail extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  apps: AppsAPI.Apps = new AppsAPI.Apps(this._client);
}

Tail.Users = Users;
Tail.Apps = Apps;

export declare namespace Tail {
  export {
    Users as Users,
    type UserCreateResponse as UserCreateResponse,
    type UserAllResponse as UserAllResponse,
    type UserStatusResponse as UserStatusResponse,
    type UserCreateParams as UserCreateParams,
    type UserAllParams as UserAllParams,
    type UserStatusParams as UserStatusParams,
  };

  export {
    Apps as Apps,
    type AppAllResponse as AppAllResponse,
    type AppLinkedResponse as AppLinkedResponse,
    type AppLinkedParams as AppLinkedParams,
  };
}
