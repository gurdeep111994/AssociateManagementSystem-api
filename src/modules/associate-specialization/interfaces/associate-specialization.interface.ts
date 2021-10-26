import { AssociateSpecializationDto } from '../dto/associate-specialization.dto';
import { AssociateSpecialization as AssociateSpecializationEntity } from '../entity/associate-specialization.entity';

export interface IAssociatesSpecialization {
  findAll(): Promise<AssociateSpecializationEntity[]>;
  findOne(id: number): Promise<AssociateSpecializationEntity>;
  save(
    associateSpecialization: AssociateSpecializationDto,
  ): Promise<AssociateSpecializationEntity[]>;
  // update(id: number, associateSpecialization: AssociateSpecializationDto): any;
  remove(id: number): any;
}
