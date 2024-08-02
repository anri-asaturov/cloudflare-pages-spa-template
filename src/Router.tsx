import { Route, Switch } from 'wouter';
import { trpc } from './trpc/trpc';

export function Router() {
  const q = trpc.hello.useQuery('1');

  return (
    <Switch>
      <Route path="/">henlo {q.isLoading ? 'loading' : `response: ${JSON.stringify(q.data)}`}</Route>
    </Switch>
  );
}
