// @ts-ignore
import serverModule from './index.cjs';

const app = (serverModule as any)?.default?.default || (serverModule as any)?.default || serverModule;

export default function handler(req: any, res: any) {
  return app(req, res);
}
