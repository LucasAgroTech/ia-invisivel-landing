/*
 * WHAT IS THIS FILE?
 *
 * SSR entry point for static generation only.
 * This file is used to render the app to static HTML.
 */
import {
  renderToStream,
  type RenderToStreamOptions,
} from '@builder.io/qwik/server';
import { manifest } from '@qwik-client-manifest';
import Root from './root';

export default function (opts: RenderToStreamOptions) {
  return renderToStream(<Root />, {
    manifest,
    ...opts,
    // ✅ Força geração estática
    containerTagName: 'div',
    containerAttributes: {
      id: 'root',
    },
  });
}
