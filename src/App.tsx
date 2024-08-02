import { QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Router } from './Router';
import { queryClient, trpc, trpcQueryClient } from './trpc/trpc';

export function App() {
  return (
    <trpc.Provider client={trpcQueryClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </trpc.Provider>
  );
}
