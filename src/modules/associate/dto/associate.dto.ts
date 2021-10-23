import { IsNotEmpty } from 'class-validator';

export class AssociateDto {
  @IsNotEmpty()
  readonly associateName: string;

  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly address: string;

  @IsNotEmpty()
  readonly specializationId: string;
}
