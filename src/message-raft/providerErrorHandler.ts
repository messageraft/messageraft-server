import { ProviderName } from '@messageraft/common';
import { sendgridErrorHandler } from '@messageraft/sendgrid';
import { twilioErrorHandler } from '@messageraft/twilio';
import { slackErrorHandler } from '@messageraft/slack';
import { maildevErrorHandler } from '@messageraft/maildev';

export function providerErrorHandler(error: any, providerName: ProviderName) {
  switch (providerName) {
    case ProviderName.SENDGRID:
      return sendgridErrorHandler(error);
    case ProviderName.TWILIO:
      return twilioErrorHandler(error);
    case ProviderName.SLACK:
      return slackErrorHandler(error);
    case ProviderName.MAILDEV:
      return maildevErrorHandler(error);
    default:
      throw new Error(
        `Cannot handle errors for this provider: [${providerName}]`,
      );
  }
}
