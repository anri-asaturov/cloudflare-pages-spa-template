import { QueryClient } from '@tanstack/react-query';
import { createTRPCReact } from '@trpc/react-query';
import type { ApiRouter } from '../../functions/src/router';
import { trpcLinks } from './links';

export const trpc = createTRPCReact<ApiRouter>();

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(error, _variables, _context) {
        console.error(error);
        // notifications.show({
        //   title: 'Something went wrong',
        //   message: error.message,
        //   color: 'red'
        // });
      }
    }
  }
});

export const trpcQueryClient = trpc.createClient({
  links: trpcLinks
});
