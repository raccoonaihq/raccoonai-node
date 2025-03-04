// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ExtensionsAPI from './extensions';
import {
  ExtensionAllResponse,
  ExtensionDeleteResponse,
  ExtensionGetResponse,
  ExtensionUploadParams,
  ExtensionUploadResponse,
  Extensions,
} from './extensions';
import * as SessionsAPI from './sessions';
import {
  SessionAllParams,
  SessionAllResponse,
  SessionCreateParams,
  SessionCreateResponse,
  SessionLogsResponse,
  SessionMediaResponse,
  SessionStatusResponse,
  SessionTerminateResponse,
  Sessions,
} from './sessions';

export class Fleet extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
}

Fleet.Sessions = Sessions;
Fleet.Extensions = Extensions;

export declare namespace Fleet {
  export {
    Sessions as Sessions,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionAllResponse as SessionAllResponse,
    type SessionLogsResponse as SessionLogsResponse,
    type SessionMediaResponse as SessionMediaResponse,
    type SessionStatusResponse as SessionStatusResponse,
    type SessionTerminateResponse as SessionTerminateResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionAllParams as SessionAllParams,
  };

  export {
    Extensions as Extensions,
    type ExtensionDeleteResponse as ExtensionDeleteResponse,
    type ExtensionAllResponse as ExtensionAllResponse,
    type ExtensionGetResponse as ExtensionGetResponse,
    type ExtensionUploadResponse as ExtensionUploadResponse,
    type ExtensionUploadParams as ExtensionUploadParams,
  };
}
