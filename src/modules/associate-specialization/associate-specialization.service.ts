import { Injectable, Inject } from '@nestjs/common';
import { IAssociatesSpecialization } from './interfaces/associate-specialization.interface';
import { ASSOCIATE_SPECIALIZATION_REPOSITORY } from '../../core/constants/index';
import { AssociateSpecialization } from './entity/associate-specialization.entity';
import { AssociateSpecializationDto } from './dto/associate-specialization.dto';
import { Specialization } from '../specialization/entity/specialization.entity';

@Injectable()
export class AssociateSpecializationService
  implements IAssociatesSpecialization
{
  constructor(
    @Inject(ASSOCIATE_SPECIALIZATION_REPOSITORY)
    private readonly associateRepository: typeof AssociateSpecialization,
  ) {}

  async findAll(): Promise<AssociateSpecialization[]> {
    return await this.associateRepository.findAll<AssociateSpecialization>({
      include: [{ model: Specialization }],
    });
  }

  async findOne(id): Promise<AssociateSpecialization> {
    return await this.associateRepository.findOne({
      where: { id },
      include: [{ model: Specialization }],
    });
  }

  async save(
    associateSpecializationDto: AssociateSpecializationDto,
  ): Promise<AssociateSpecialization[]> {
    const associateId = associateSpecializationDto.associateId;
    const specializations = associateSpecializationDto.specializationIds;
    const associateSpecializations = specializations.map((specialization) => {
      const associateSpecialization = {
        associateId: associateId,
        specializationId: specialization,
      } as AssociateSpecialization;
      return associateSpecialization;
    });
    await this.remove(associateId);
    return await this.associateRepository.bulkCreate<AssociateSpecialization>(
      associateSpecializations,
    );
  }

  // async update(id: number, associate: AssociateSpecializationDto) {
  //   const [numberOfAffectedRows, [updatedPost]] =
  //     await this.associateRepository.update(
  //       {
  //         associateId: associate.associateId,
  //         specializationId: associate.specializationId,
  //       } as AssociateSpecialization,
  //       { where: { id }, returning: true },
  //     );
  //   return { numberOfAffectedRows, updatedPost };
  // }

  async remove(id: number) {
    return await this.associateRepository.destroy({
      where: { associateId: id },
    });
  }
}
