import * as os from 'os';

export function isWindows() {
  return os.platform() === 'win32';
}

export function isMac() {
  return os.platform() === 'darwin';
}