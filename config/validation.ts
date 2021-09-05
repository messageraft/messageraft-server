import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'staging'),
  PORT: Joi.number().default(3000),
  SENDGRID_API_KEY: Joi.string(),
  TWILIO_ACCOUNT_SID: Joi.string(),
  TWILIO_AUTH_TOKEN: Joi.string(),
  TWILIO_PHONE_NUMBER: Joi.string(),
});
