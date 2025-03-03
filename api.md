# Lam

Types:

- <code><a href="./src/resources/lam.ts">LamIntegrationRunResponse</a></code>
- <code><a href="./src/resources/lam.ts">LamRunResponse</a></code>

Methods:

- <code title="post /lam/{app_name}/run">client.lam.<a href="./src/resources/lam.ts">integrationRun</a>(appName, { ...params }) -> LamIntegrationRunResponse</code>
- <code title="post /lam/run">client.lam.<a href="./src/resources/lam.ts">run</a>({ ...params }) -> LamRunResponse</code>

# Fleet

Types:

- <code><a href="./src/resources/fleet.ts">FleetCreateResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetLogsResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetStatusResponse</a></code>
- <code><a href="./src/resources/fleet.ts">FleetTerminateResponse</a></code>

Methods:

- <code title="post /sessions/create">client.fleet.<a href="./src/resources/fleet.ts">create</a>({ ...params }) -> FleetCreateResponse</code>
- <code title="get /sessions/{session_id}/logs">client.fleet.<a href="./src/resources/fleet.ts">logs</a>(sessionId) -> FleetLogsResponse</code>
- <code title="get /sessions/{session_id}/status">client.fleet.<a href="./src/resources/fleet.ts">status</a>(sessionId) -> FleetStatusResponse</code>
- <code title="delete /sessions/{session_id}/terminate">client.fleet.<a href="./src/resources/fleet.ts">terminate</a>(sessionId) -> FleetTerminateResponse</code>
