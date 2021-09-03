import { EmailOptions, ProviderName } from '@messageraft/common';
import { IsNotEmpty } from 'class-validator';

export class SendDto {
  @IsNotEmpty({ message: 'Field `Provider` cannot be empty' })
  provider: ProviderName;

  @IsNotEmpty({ message: 'Field `data` cannot be empty' })
  data: EmailOptions;
}
