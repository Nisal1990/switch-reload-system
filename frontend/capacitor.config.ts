import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.switchreloadsystem.app',
  appName: 'switch-reload-system',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
