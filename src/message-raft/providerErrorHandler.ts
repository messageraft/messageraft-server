import { ProviderName } from '@messageraft/common';
import { sendgridErrorHandler } from '@messageraft/sendgrid';
import { twilioErrorHandler } from '@messageraft/twilio';

export function providerErrorHandler(error: any, providerName: ProviderName) {
  switch (providerName) {
    case ProviderName.SENDGRID:
      return sendgridErrorHandler(error);
    case ProviderName.TWILIO:
      return twilioErrorHandler(error);
    default:
      throw new Error(
        `Cannot handle errors for this provider: [${providerName}]`,
      );
  }
}
