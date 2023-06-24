export const cachingStrategies = [
  {
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
    handler: "CacheFirst",
    options: {
      cacheName: "images",
      expiration: {
        maxEntries: 100,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      },
    },
  },
  {
    urlPattern: /\.(?:js|css)$/,
    handler: "StaleWhileRevalidate",
    options: {
      cacheName: "assets",
      expiration: {
        maxAgeSeconds: 24 * 60 * 60, // 1 day
      },
    },
  },
  {
    urlPattern: /\.(?:woff|woff2|ttf|otf)$/,
    handler: "CacheFirst",
    options: {
      cacheName: "fonts",
      expiration: {
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      },
    },
  },
  {
    urlPattern: /^https:\/\/api.example.com/,
    handler: "NetworkFirst",
    options: {
      cacheName: "api",
      expiration: {
        maxAgeSeconds: 60 * 60, // 1 hour
      },
    },
  },
  {
    urlPattern: /^https:\/\/cdn.example.com/,
    handler: "CacheFirst",
    options: {
      cacheName: "cdn",
      expiration: {
        maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
      },
    },
  },
  {
    urlPattern: /\/api\/data/,
    handler: "NetworkOnly",
    options: {
      cacheName: "dynamic-api",
    },
  },
];

