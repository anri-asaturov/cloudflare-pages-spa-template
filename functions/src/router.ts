import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import type { Context } from './context';

export const t = initTRPC.context<Context>().create();

export const apiRouter = t.router({
  hello: t.procedure.input(z.string()).query(opts => {
    return `hello ${opts.input}`;
  })
});

// export type definition of API
export type ApiRouter = typeof apiRouter;
