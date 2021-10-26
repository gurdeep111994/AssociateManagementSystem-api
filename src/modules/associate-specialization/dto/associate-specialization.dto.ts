import { IsNotEmpty } from 'class-validator';

export class AssociateSpecializationDto {
  @IsNotEmpty()
  readonly associateId: number;

  @IsNotEmpty()
  readonly specializationIds: Array<number> = [];
}
