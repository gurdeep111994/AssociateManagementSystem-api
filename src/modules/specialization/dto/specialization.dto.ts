import { IsNotEmpty } from 'class-validator';

export class specializationDto {
  @IsNotEmpty()
  readonly specializationName: string;
}
