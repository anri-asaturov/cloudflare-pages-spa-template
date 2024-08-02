import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '../src/context';
import { apiRouter } from '../src/router';

export const onRequest: PagesFunction = async context => {
  return await fetchRequestHandler({
    endpoint: '/api/trpc',
    req: context.request,
    router: apiRouter,
    createContext,
    allowBatching: false
  });
};
