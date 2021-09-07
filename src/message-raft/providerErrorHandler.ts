import { ProviderName } from '@messageraft/common';
import { sendgridErrorHandler } from '@messageraft/sendgrid';
import { twilioErrorHandler } from '@messageraft/twilio';
import { slackErrorHandler } from '@messageraft/slack';

export function providerErrorHandler(error: any, providerName: ProviderName) {
  switch (providerName) {
    case ProviderName.SENDGRID:
      return sendgridErrorHandler(error);
    case ProviderName.TWILIO:
      return twilioErrorHandler(error);
    case ProviderName.SLACK:
      return slackErrorHandler(error);
    default:
      throw new Error(
        `Cannot handle errors for this provider: [${providerName}]`,
      );
  }
}
