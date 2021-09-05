export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  domain: process.env.DOMAIN,
  port: parseInt(process.env.PORT, 10) || 3001,
  credentials: {
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
    },
    twilio: {
      accountSid: process.env.TWILIO_ACCOUNT_SID,
      authToken: process.env.TWILIO_AUTH_TOKEN,
      from: process.env.TWILIO_PHONE_NUMBER,
    },
  },
});
