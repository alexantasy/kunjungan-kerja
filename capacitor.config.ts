import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'penerimaan-tamu-boyolali',
  webDir: 'www',
  android: {
    webContentsDebuggingEnabled: true,
    allowMixedContent: true,
  },

};

export default config;
