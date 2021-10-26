import { IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class AssociateDto {
  @IsNotEmpty()
  readonly associateName: string;

  @IsPhoneNumber('US')
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly specializationIds: Array<number> = [];
}
