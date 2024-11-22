import { FeatureLib1 } from '@chaotic-koala/feature-lib1';
import { FeatureLib2 } from '@chaotic-koala/feature-lib2';
import { FeatureLib3 } from '@chaotic-koala/feature-lib3';
import { FeatureLib4 } from '@chaotic-koala/feature-lib4';
import { FeatureLib5 } from '@chaotic-koala/feature-lib5';
import type { MetaFunction } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

export const meta: MetaFunction = () => [
  {
    title: 'New Remix App',
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <FeatureLib1 />
        <FeatureLib2 />
        <FeatureLib3 />
        <FeatureLib4 />
        <FeatureLib5 />
      </body>
    </html>
  );
}
