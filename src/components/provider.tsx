'use client';

import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { HOST_NAME } from '@/constants/path';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    person_profiles: 'identified_only',
  });
}

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Analytics />
      <Script
        defer
        data-site-id={HOST_NAME}
        src="https://assets.onedollarstats.com/tracker.js"
      />
      <SpeedInsights />
      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </>
  );
}
