import { ProvidersManifest } from '@messageraft/common';

import { ConfigService } from '@nestjs/config';

export function buildProvidersConfig(configService: ConfigService) {
  const credentials = configService.get('credentials');

  if (!credentials)
    throw new Error('Credentials of at least one provider are required');

  return Object.keys(credentials).map((providerKey) => {
    const provider = ProvidersManifest.find(
      (provider) => provider.name.toLowerCase() === providerKey,
    );

    if (!provider)
      throw new Error(
        `Provider in credentials named: ${providerKey} is not supported`,
      );

    return {
      ...provider,
      options: configService.get(`credentials.${providerKey}`),
    };
  });
}
