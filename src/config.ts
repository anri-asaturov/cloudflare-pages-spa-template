export type DeploymentName = 'production' | 'development' | undefined;

/**
 * This is the build MODE/NODE_ENV the app was built with.
 * Locally we always build in 'development'.
 * When we deploy to any environment, we build in 'production'.
 */
export const isProdWebApp = import.meta.env.MODE === 'production';
export const isDevWebApp = import.meta.env.MODE === 'development';

/**
 * This is the deployment/environment name.
 * It's used to differentiate between different different deployed environments.
 */
export const deploymentName: DeploymentName = import.meta.env.VITE_DEPLOYMENT;

// if (isProdWebApp && !deploymentName) {
//   throw new Error('Deployment name must be set in production mode.');
// }

export const isProdDeployment = import.meta.env.VITE_DEPLOYMENT === 'production';
export const isDevDeployment = import.meta.env.VITE_DEPLOYMENT === 'development';

export const trpcUrl = '/api/trpc';
