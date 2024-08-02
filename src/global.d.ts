export type {};

declare global {
  interface Window {
    trpc: any;
    tsmb: any;
    PLAYWRIGHT_TEST?: boolean;
  }
}
