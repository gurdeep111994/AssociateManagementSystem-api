import { Controller, Get, Inject } from '@nestjs/common';
import { ISpecialization } from './interfaces/specialization.interface';
import { SPECIALIZATION_REPOSITORY } from '../../core/constants';

@Controller('specialization')
export class SpecializationController {
  constructor(
    @Inject(SPECIALIZATION_REPOSITORY)
    private readonly _specialization: ISpecialization,
  ) {}
  add(): void {
    throw new Error('Method not implemented.');
  }

  @Get()
  getHello(): string {
    return this._specialization.getHello();
  }
}
