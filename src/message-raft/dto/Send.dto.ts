import { ProviderName } from '@messageraft/common';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { EmailOptions } from './EmailOptions.dto';

export class SendDto {
  @ApiProperty({ required: true, enum: ProviderName })
  @IsNotEmpty({ message: 'Field `Provider` cannot be empty' })
  provider: ProviderName;

  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Field `data` cannot be empty' })
  data: EmailOptions;
}
