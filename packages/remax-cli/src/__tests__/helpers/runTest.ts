import * as path from 'path';
import build, { JEST_BUILD_TIMEOUT } from './build';
import { PlatformTarget } from '../../build/platform';

export default function runTest(app: string, target: PlatformTarget = 'alipay', outputPath?: string, options?: any) {
  it(
    `build ${app} on target ${target}`,
    async () => {
      const result = await build(app, target, options);
      expect(result).toMatchOutput(outputPath || path.resolve(__dirname, `../fixtures/${app}/expected`));
    },

    JEST_BUILD_TIMEOUT
  );
}
