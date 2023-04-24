const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    TUTORING_CALENDAR_ID: process.env.TUTORING_CALENDAR_ID
  }
}

module.exports = nextConfig;
