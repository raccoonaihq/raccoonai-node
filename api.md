# Lam

Types:

- <code><a href="./src/resources/lam.ts">LamRunResponse</a></code>
- <code><a href="./src/resources/lam.ts">LamTasksResponse</a></code>

Methods:

- <code title="post /lam/run">client.lam.<a href="./src/resources/lam.ts">run</a>({ ...params }) -> LamRunResponse</code>
- <code title="get /lam/tasks">client.lam.<a href="./src/resources/lam.ts">tasks</a>({ ...params }) -> LamTasksResponse</code>

# Tail

Types:

- <code><a href="./src/resources/tail/tail.ts">TailUsersResponse</a></code>

Methods:

- <code title="get /tail/users">client.tail.<a href="./src/resources/tail/tail.ts">users</a>({ ...params }) -> TailUsersResponse</code>

## Apps

Types:

- <code><a href="./src/resources/tail/apps.ts">AppAllResponse</a></code>
- <code><a href="./src/resources/tail/apps.ts">AppLinkedResponse</a></code>

Methods:

- <code title="get /tail/apps">client.tail.apps.<a href="./src/resources/tail/apps.ts">all</a>() -> AppAllResponse</code>
- <code title="get /tail/linked-apps">client.tail.apps.<a href="./src/resources/tail/apps.ts">linked</a>({ ...params }) -> AppLinkedResponse</code>

## Auth

Types:

- <code><a href="./src/resources/tail/auth.ts">AuthStatusResponse</a></code>

Methods:

- <code title="get /tail/app/auth-status">client.tail.auth.<a href="./src/resources/tail/auth.ts">status</a>({ ...params }) -> AuthStatusResponse</code>

# Fleet

Types:

- <code><a href="./src/resources/fleet.ts">FleetCreateResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetLogsResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetSessionsResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetStatusResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetTerminateResponse</a></code>

Methods:

- <code title="post /sessions/create">client.fleet.<a href="./src/resources/fleet.ts">create</a>({ ...params }) -> FleetCreateResponse</code>
- <code title="get /sessions/{session_id}/logs">client.fleet.<a href="./src/resources/fleet.ts">logs</a>(sessionId) -> FleetLogsResponse</code>
- <code title="get /sessions">client.fleet.<a href="./src/resources/fleet.ts">sessions</a>({ ...params }) -> FleetSessionsResponse</code>
- <code title="get /sessions/{session_id}/status">client.fleet.<a href="./src/resources/fleet.ts">status</a>(sessionId) -> FleetStatusResponse</code>
- <code title="delete /sessions/{session_id}/terminate">client.fleet.<a href="./src/resources/fleet.ts">terminate</a>(sessionId) -> FleetTerminateResponse</code>

# Extensions

Types:

- <code><a href="./src/resources/extensions.ts">ExtensionDeleteResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionAllResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionGetResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionUploadResponse</a></code>

Methods:

- <code title="delete /extensions/{extensionId}">client.extensions.<a href="./src/resources/extensions.ts">delete</a>(extensionId) -> unknown</code>
- <code title="get /extensions">client.extensions.<a href="./src/resources/extensions.ts">all</a>() -> ExtensionAllResponse</code>
- <code title="get /extensions/{extensionId}">client.extensions.<a href="./src/resources/extensions.ts">get</a>(extensionId) -> ExtensionGetResponse</code>
- <code title="post /extensions">client.extensions.<a href="./src/resources/extensions.ts">upload</a>({ ...params }) -> ExtensionUploadResponse</code>
