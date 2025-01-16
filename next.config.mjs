import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;

// export default withSentryConfig(nextConfig, {
//     org: "guirewire",
//     project: "javascript-nextjs",
//     silent: !process.env.CI,
//     widenClientFileUpload: true,
//     reactComponentAnnotation: {
//         enabled: true,
//     },
//     hideSourceMaps: true,
//     disableLogger: true,
//     automaticVercelMonitors: true,
// });

