import { Controller, Post, Inject, Body } from '@nestjs/common';
import { ISpecialization } from './interfaces/specialization.interface';
import { SPECIALIZATION_SERVICE } from '../../core/constants';
import { Specialization as SpecializationEntity } from './entity/specialization.entity';
import { specializationDto } from './dto/specialization.dto';

@Controller('specialization')
export class SpecializationController {
  constructor(
    @Inject(SPECIALIZATION_SERVICE)
    private readonly _specialization: ISpecialization,
  ) {}

  @Post()
  async create(
    @Body() specialization: specializationDto,
  ): Promise<SpecializationEntity> {
    return await this._specialization.create(specialization);
  }
}
