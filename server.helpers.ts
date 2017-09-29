import { readdirSync } from 'fs';
const distName = './dist-server/';

export const bundleFileName =
  distName + readdirSync(distName).find(file => !!file.match(/.js/));
