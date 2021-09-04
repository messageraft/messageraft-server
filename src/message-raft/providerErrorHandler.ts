import { ProviderName } from '@messageraft/common';
import { sendgridErrorHandler } from '@messageraft/sendgrid';

export function providerErrorHandler(error: any, providerName: ProviderName) {
  switch (providerName) {
    case ProviderName.SENDGRID:
      return sendgridErrorHandler(error);
    default:
      throw new Error(
        `Cannot handle errors for this provider: [${providerName}]`,
      );
  }
}
