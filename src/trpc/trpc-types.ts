import type { inferReactQueryProcedureOptions } from '@trpc/react-query';
import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { ApiRouter } from '../../functions/src/router';

export type ReactQueryOptions = inferReactQueryProcedureOptions<ApiRouter>;

export type ApiIn = inferRouterInputs<ApiRouter>;
export type ApiOut = inferRouterOutputs<ApiRouter>;

//export type Session = ApiOut['auth']['getSession'];
