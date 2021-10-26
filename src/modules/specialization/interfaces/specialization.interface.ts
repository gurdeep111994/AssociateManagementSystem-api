import { specializationDto } from '../dto/specialization.dto';
import { Specialization as SpecializationEntity } from '../entity/specialization.entity';

export interface ISpecialization {
  create(specialization: specializationDto): Promise<SpecializationEntity>;
  findOne(specialization: specializationDto): Promise<SpecializationEntity>;
}
