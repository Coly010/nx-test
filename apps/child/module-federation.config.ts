import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'child',
  exposes: {
    './Module': 'apps/child/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
