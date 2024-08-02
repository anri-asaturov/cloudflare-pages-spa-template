import { type createTRPCClient, httpLink, loggerLink } from '@trpc/client';
import type { ApiRouter } from '../../functions/src/router';
import { isDevWebApp, trpcUrl } from '../config';

type TRPCLinks = Parameters<typeof createTRPCClient<ApiRouter>>[0]['links'];

export const trpcLinks: TRPCLinks = [
  loggerLink({
    enabled: opts => isDevWebApp || (opts.direction === 'down' && opts.result instanceof Error)
  }),
  httpLink({
    url: trpcUrl,
    fetch(...args) {
      return fetch(...args);
    }
  })
];
