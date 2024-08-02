# cloudflare-pages-spa-template
Template repository for building SPA apps hosted on CF pages with functions.
Features working on the CF Pages project with Vite HMR.

It builds the project with Vite before running the `wrangler dev`
And then you can run `vite dev` that will proxy all requests to the server.

1. Run backend and frontend in dev mode in 2 separate terminals:

```bash
yarn dev:web
yarn dev:server
```

2.Open http://localhost:3000 in your browser.

Server will also host static fronted assets, but they won't get updated.
So you can also use localhost:3001 but you won't see any changes made after you ran `yarn run dev:server`