# Changelog

## 0.1.0-alpha.21 (2025-06-14)

Full Changelog: [v0.1.0-alpha.20...v0.1.0-alpha.21](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.20...v0.1.0-alpha.21)

### Bug Fixes

* publish script — handle NPM errors correctly ([d7befdc](https://github.com/raccoonaihq/raccoonai-node/commit/d7befdc9138d260b8f413f1b40383e2ae37474d5))


### Chores

* **docs:** grammar improvements ([4c45709](https://github.com/raccoonaihq/raccoonai-node/commit/4c45709941af0d5164a21068313b98cc898d74a6))
* **docs:** use top-level-await in example snippets ([6e0a69f](https://github.com/raccoonaihq/raccoonai-node/commit/6e0a69f1510cbfa8b3170fbe75c9113b02eede94))
* improve publish-npm script --latest tag logic ([0259ec5](https://github.com/raccoonaihq/raccoonai-node/commit/0259ec517d73cf6f9d0bb0ec68e198b20302fdbb))
* **internal:** make base APIResource abstract ([d2d4dc6](https://github.com/raccoonaihq/raccoonai-node/commit/d2d4dc6405fa55cad08822cb6a205f4cfd71ef87))

## 0.1.0-alpha.20 (2025-05-07)

Full Changelog: [v0.1.0-alpha.19...v0.1.0-alpha.20](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.19...v0.1.0-alpha.20)

### Chores

* **ci:** bump node version for release workflows ([b7bdf93](https://github.com/raccoonaihq/raccoonai-node/commit/b7bdf93e02ef524cded87006e39bf07fa5b6efb6))


### Documentation

* add examples to tsdocs ([0216267](https://github.com/raccoonaihq/raccoonai-node/commit/021626777430bea46d203f4ef7daf807cac75abf))

## 0.1.0-alpha.19 (2025-05-01)

Full Changelog: [v0.1.0-alpha.18...v0.1.0-alpha.19](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.18...v0.1.0-alpha.19)

### Documentation

* **readme:** fix typo ([a129273](https://github.com/raccoonaihq/raccoonai-node/commit/a1292736d566e72f99307dd4da54c1efd953353b))

## 0.1.0-alpha.18 (2025-04-24)

Full Changelog: [v0.1.0-alpha.17...v0.1.0-alpha.18](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.17...v0.1.0-alpha.18)

### Chores

* **ci:** add timeout thresholds for CI jobs ([726161e](https://github.com/raccoonaihq/raccoonai-node/commit/726161e0164d5387914b38277e85cbcec167f709))
* **ci:** only use depot for staging repos ([e52c3df](https://github.com/raccoonaihq/raccoonai-node/commit/e52c3df8c0eb404facdec6bcff5c23d0d72dc43f))
* **client:** minor internal fixes ([49d187d](https://github.com/raccoonaihq/raccoonai-node/commit/49d187d47d2d2510faefdd1c1247db737b21c711))
* **internal:** codegen related update ([54c4539](https://github.com/raccoonaihq/raccoonai-node/commit/54c4539af72c791504b3e9f336a9da654c832336))
* **internal:** reduce CI branch coverage ([9afb749](https://github.com/raccoonaihq/raccoonai-node/commit/9afb749d96d23ea521155e45c5f8ca7db3f1df23))
* **internal:** upload builds and expand CI branch coverage ([b129130](https://github.com/raccoonaihq/raccoonai-node/commit/b129130538c7b9b020b3cd4e9664d60f2e74562a))

## 0.1.0-alpha.17 (2025-04-05)

Full Changelog: [v0.1.0-alpha.16...v0.1.0-alpha.17](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.16...v0.1.0-alpha.17)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#53](https://github.com/raccoonaihq/raccoonai-node/issues/53)) ([86e613b](https://github.com/raccoonaihq/raccoonai-node/commit/86e613b80895bae654451e0ad0306a365965f048))

## 0.1.0-alpha.16 (2025-04-04)

Full Changelog: [v0.1.0-alpha.15...v0.1.0-alpha.16](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.15...v0.1.0-alpha.16)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#51](https://github.com/raccoonaihq/raccoonai-node/issues/51)) ([30290f6](https://github.com/raccoonaihq/raccoonai-node/commit/30290f68109aa11cc1024911d9da6a0a4047029e))


### Chores

* **internal:** add aliases for Record and Array ([#49](https://github.com/raccoonaihq/raccoonai-node/issues/49)) ([8d9c7fe](https://github.com/raccoonaihq/raccoonai-node/commit/8d9c7fede197cdc36f433312178351642634f4e7))

## 0.1.0-alpha.15 (2025-04-03)

Full Changelog: [v0.1.0-alpha.14...v0.1.0-alpha.15](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.14...v0.1.0-alpha.15)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#46](https://github.com/raccoonaihq/raccoonai-node/issues/46)) ([a81529b](https://github.com/raccoonaihq/raccoonai-node/commit/a81529b55bf156d9498e0d26a725b40fde39968c))

## 0.1.0-alpha.14 (2025-03-28)

Full Changelog: [v0.1.0-alpha.13...v0.1.0-alpha.14](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.13...v0.1.0-alpha.14)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#43](https://github.com/raccoonaihq/raccoonai-node/issues/43)) ([220ff6f](https://github.com/raccoonaihq/raccoonai-node/commit/220ff6f0c81d3e5cff3d8d7b5c08a0cecd6f7315))

## 0.1.0-alpha.13 (2025-03-22)

Full Changelog: [v0.1.0-alpha.12...v0.1.0-alpha.13](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.12...v0.1.0-alpha.13)

### Bug Fixes

* avoid type error in certain environments ([#40](https://github.com/raccoonaihq/raccoonai-node/issues/40)) ([0a93158](https://github.com/raccoonaihq/raccoonai-node/commit/0a93158d50cbc4e3c94fe0e679693bf407625e81))

## 0.1.0-alpha.12 (2025-03-20)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Chores

* **exports:** cleaner resource index imports ([#36](https://github.com/raccoonaihq/raccoonai-node/issues/36)) ([406f85f](https://github.com/raccoonaihq/raccoonai-node/commit/406f85f63453904c8030bec1a362847ee4676a27))
* **exports:** stop using path fallbacks ([#38](https://github.com/raccoonaihq/raccoonai-node/issues/38)) ([9393f5d](https://github.com/raccoonaihq/raccoonai-node/commit/9393f5d90f9f804f8a126c182b680cd5e1794546))

## 0.1.0-alpha.11 (2025-03-18)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** update new domain ([#33](https://github.com/raccoonaihq/raccoonai-node/issues/33)) ([4d29359](https://github.com/raccoonaihq/raccoonai-node/commit/4d29359a1fcfdb52affccba84f48518fe9a335d8))

## 0.1.0-alpha.10 (2025-03-18)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([#30](https://github.com/raccoonaihq/raccoonai-node/issues/30)) ([63c8978](https://github.com/raccoonaihq/raccoonai-node/commit/63c897878d21ace8b89ab95262b3e2549470a3bd))

## 0.1.0-alpha.9 (2025-03-14)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Bug Fixes

* **exports:** ensure resource imports don't require /index ([#28](https://github.com/raccoonaihq/raccoonai-node/issues/28)) ([c8897a0](https://github.com/raccoonaihq/raccoonai-node/commit/c8897a0fef13355d967de57160399190daa3eb5f))


### Chores

* **internal:** remove extra empty newlines ([#26](https://github.com/raccoonaihq/raccoonai-node/issues/26)) ([9ab43c0](https://github.com/raccoonaihq/raccoonai-node/commit/9ab43c01f1ad81433b5aa84c2b928c10ab32c5bd))

## 0.1.0-alpha.8 (2025-03-11)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#22](https://github.com/raccoonaihq/raccoonai-node/issues/22)) ([134af62](https://github.com/raccoonaihq/raccoonai-node/commit/134af621ff304a72a586c2ecf4c91ea6095e796e))
* **client:** accept RFC6838 JSON content types ([#24](https://github.com/raccoonaihq/raccoonai-node/issues/24)) ([8d21abc](https://github.com/raccoonaihq/raccoonai-node/commit/8d21abc3b8da9f483a7739304b02d06f625577da))

## 0.1.0-alpha.7 (2025-03-04)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** add create user and media endpoints + restructure ([#19](https://github.com/raccoonaihq/raccoonai-node/issues/19)) ([ef359dd](https://github.com/raccoonaihq/raccoonai-node/commit/ef359ddcb6ce67ee5d0093ce27059c990c5581f9))

## 0.1.0-alpha.6 (2025-03-03)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Bug Fixes

* **api:** tail users get path ([#16](https://github.com/raccoonaihq/raccoonai-node/issues/16)) ([3a2ba4e](https://github.com/raccoonaihq/raccoonai-node/commit/3a2ba4ed05dbd24a7fd557ef1e316be4b8249e47))

## 0.1.0-alpha.5 (2025-03-03)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** add tail and extensions resources + update old ones ([#13](https://github.com/raccoonaihq/raccoonai-node/issues/13)) ([8a2f76f](https://github.com/raccoonaihq/raccoonai-node/commit/8a2f76febdada052bd6ec03ada526b4053c9998c))

## 0.1.0-alpha.4 (2025-03-03)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Features

* **api:** api update ([#10](https://github.com/raccoonaihq/raccoonai-node/issues/10)) ([225a240](https://github.com/raccoonaihq/raccoonai-node/commit/225a240219a37fcb27e9a297016f13d71d527cf2))

## 0.1.0-alpha.3 (2025-03-01)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Documentation

* update URLs from stainlessapi.com to stainless.com ([#7](https://github.com/raccoonaihq/raccoonai-node/issues/7)) ([0c98e03](https://github.com/raccoonaihq/raccoonai-node/commit/0c98e031e7499dd5b5aae9b78c83b310f4a326bc))

## 0.1.0-alpha.2 (2025-02-22)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/raccoonaihq/raccoonai-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* **internal:** codegen related update ([#4](https://github.com/raccoonaihq/raccoonai-node/issues/4)) ([a725bd6](https://github.com/raccoonaihq/raccoonai-node/commit/a725bd6c332cde782d464aa372b2b227fdb5a060))

## 0.1.0-alpha.1 (2025-02-20)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/raccoonaihq/raccoonai-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **client:** increase initial delay in retries to 1 sec ([a4a43d6](https://github.com/raccoonaihq/raccoonai-node/commit/a4a43d64a1ea0710311cf6b423a0611f2eeb7d50))
* **config:** update github org name ([21ed89e](https://github.com/raccoonaihq/raccoonai-node/commit/21ed89e5936262a74cd31b44b85383de22f26729))
