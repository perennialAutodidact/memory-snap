import path from 'path';
import { fileURLToPath } from 'url';

export const getDirName = (moduleURL) => {
  const filename = fileURLToPath(moduleURL);
  return path.dirname(filename);
};
