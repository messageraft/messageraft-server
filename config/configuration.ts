export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  domain: process.env.DOMAIN,
  port: parseInt(process.env.PORT, 10) || 3001,
  credentials: {
    sendgrid: process.env.SENDGRID_API_KEY,
  },
});
