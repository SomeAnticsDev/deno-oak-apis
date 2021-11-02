# Building APIs with Deno and Oak — Demo

> **[Demo](https://deno-oak-apis.deno.dev) | [Stream](https://someantics.dev/deno-oak-apis/)**

***

**Howdy!** This repo contains the source code for [a Some Antics stream](https://someantics.dev/deno-oak-apis/) with [Anthony Campolo](https://twitter.com/ajcwebdev) on [Deno](https://deno.land)! In particular, we built this HTTP server with [Oak](https://oakserver.github.io/oak/) and hosted it with [Deno Deploy](https://deno.com/deploy/).

To install Deno and build this server for yourself, see Anthony's [guide to Oak](https://dev.to/ajcwebdev/a-first-look-at-oak-2gob).

Once Deno is installed, you can run this server one of two ways:

**With `deno run`:**

```bash
deno run \                        
  --allow-net index.js \
  --watch \
  --no-check
```

**With `deployctl`:**

```bash
deployctl run index.js --no-check
```