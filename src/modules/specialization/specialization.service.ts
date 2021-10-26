import { Injectable, Inject } from '@nestjs/common';
import { SPECIALIZATION_REPOSITORY } from 'src/core/constants';
import { specializationDto } from './dto/specialization.dto';
import { Specialization } from './entity/specialization.entity';
import { ISpecialization } from './interfaces/specialization.interface';

@Injectable()
export class SpecializationService implements ISpecialization {
  constructor(
    @Inject(SPECIALIZATION_REPOSITORY)
    private readonly specializationRepository: typeof Specialization,
  ) {}

  async create(specialization: specializationDto): Promise<Specialization> {
    return await this.specializationRepository.create<Specialization>({
      specializationName: specialization.specializationName,
    } as Specialization);
  }

  async findOne({ ...specializationName }) {
    return this.specializationRepository.findOne<Specialization>({
      where: { specializationName: { $eq: specializationName } },
    });
  }
}
