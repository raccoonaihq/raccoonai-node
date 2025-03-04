# Lam

Types:

- <code><a href="./src/resources/lam/lam.ts">LamRunResponse</a></code>

Methods:

- <code title="post /lam/run">client.lam.<a href="./src/resources/lam/lam.ts">run</a>({ ...params }) -> LamRunResponse</code>

## Tasks

Types:

- <code><a href="./src/resources/lam/tasks.ts">TaskAllResponse</a></code>
- <code><a href="./src/resources/lam/tasks.ts">TaskMediaResponse</a></code>

Methods:

- <code title="get /lam/tasks">client.lam.tasks.<a href="./src/resources/lam/tasks.ts">all</a>({ ...params }) -> TaskAllResponse</code>
- <code title="get /lam/tasks/{taskId}/media">client.lam.tasks.<a href="./src/resources/lam/tasks.ts">media</a>(taskId) -> TaskMediaResponse</code>

# Tail

## Users

Types:

- <code><a href="./src/resources/tail/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/tail/users.ts">UserAllResponse</a></code>
- <code><a href="./src/resources/tail/users.ts">UserStatusResponse</a></code>

Methods:

- <code title="post /tail/users/create">client.tail.users.<a href="./src/resources/tail/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /tail/users">client.tail.users.<a href="./src/resources/tail/users.ts">all</a>({ ...params }) -> UserAllResponse</code>
- <code title="get /tail/app/auth-status">client.tail.users.<a href="./src/resources/tail/users.ts">status</a>({ ...params }) -> UserStatusResponse</code>

## Apps

Types:

- <code><a href="./src/resources/tail/apps.ts">AppAllResponse</a></code>
- <code><a href="./src/resources/tail/apps.ts">AppLinkedResponse</a></code>

Methods:

- <code title="get /tail/apps">client.tail.apps.<a href="./src/resources/tail/apps.ts">all</a>() -> AppAllResponse</code>
- <code title="get /tail/linked-apps">client.tail.apps.<a href="./src/resources/tail/apps.ts">linked</a>({ ...params }) -> AppLinkedResponse</code>

# Fleet

## Sessions

Types:

- <code><a href="./src/resources/fleet/sessions.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/fleet/sessions.ts">SessionAllResponse</a></code>
- <code><a href="./src/resources/fleet/sessions.ts">SessionLogsResponse</a></code>
- <code><a href="./src/resources/fleet/sessions.ts">SessionMediaResponse</a></code>
- <code><a href="./src/resources/fleet/sessions.ts">SessionStatusResponse</a></code>
- <code><a href="./src/resources/fleet/sessions.ts">SessionTerminateResponse</a></code>

Methods:

- <code title="post /sessions/create">client.fleet.sessions.<a href="./src/resources/fleet/sessions.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="get /sessions">client.fleet.sessions.<a href="./src/resources/fleet/sessions.ts">all</a>({ ...params }) -> SessionAllResponse</code>
- <code title="get /sessions/{session_id}/logs">client.fleet.sessions.<a href="./src/resources/fleet/sessions.ts">logs</a>(sessionId) -> SessionLogsResponse</code>
- <code title="get /sessions/{sessionId}/media">client.fleet.sessions.<a href="./src/resources/fleet/sessions.ts">media</a>(sessionId) -> SessionMediaResponse</code>
- <code title="get /sessions/{session_id}/status">client.fleet.sessions.<a href="./src/resources/fleet/sessions.ts">status</a>(sessionId) -> SessionStatusResponse</code>
- <code title="delete /sessions/{session_id}/terminate">client.fleet.sessions.<a href="./src/resources/fleet/sessions.ts">terminate</a>(sessionId) -> SessionTerminateResponse</code>

## Extensions

Types:

- <code><a href="./src/resources/fleet/extensions.ts">ExtensionDeleteResponse</a></code>
- <code><a href="./src/resources/fleet/extensions.ts">ExtensionAllResponse</a></code>
- <code><a href="./src/resources/fleet/extensions.ts">ExtensionGetResponse</a></code>
- <code><a href="./src/resources/fleet/extensions.ts">ExtensionUploadResponse</a></code>

Methods:

- <code title="delete /extensions/{extensionId}">client.fleet.extensions.<a href="./src/resources/fleet/extensions.ts">delete</a>(extensionId) -> unknown</code>
- <code title="get /extensions">client.fleet.extensions.<a href="./src/resources/fleet/extensions.ts">all</a>() -> ExtensionAllResponse</code>
- <code title="get /extensions/{extensionId}">client.fleet.extensions.<a href="./src/resources/fleet/extensions.ts">get</a>(extensionId) -> ExtensionGetResponse</code>
- <code title="post /extensions">client.fleet.extensions.<a href="./src/resources/fleet/extensions.ts">upload</a>({ ...params }) -> ExtensionUploadResponse</code>
