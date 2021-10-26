import { Injectable, Inject } from '@nestjs/common';
import { IAssociates } from './interfaces/associate.interface';
import {
  ASSOCIATE_REPOSITORY,
  ASSOCIATE_SPECIALIZATION_SERVICE,
} from '../../core/constants/index';
import { Associate } from './entity/associate.entity';
import { AssociateDto } from './dto/associate.dto';
import { Specialization } from '../specialization/entity/specialization.entity';
import { IAssociatesSpecialization } from '../associate-specialization/interfaces/associate-specialization.interface';
import { AssociateSpecializationDto } from '../associate-specialization/dto/associate-specialization.dto';

@Injectable()
export class AssociateService implements IAssociates {
  constructor(
    @Inject(ASSOCIATE_REPOSITORY)
    private readonly associateRepository: typeof Associate,
    @Inject(ASSOCIATE_SPECIALIZATION_SERVICE)
    private readonly associateSpecializationService: IAssociatesSpecialization,
  ) {}

  async findAll(): Promise<Associate[]> {
    try {
      return await this.associateRepository.findAll<Associate>({
        include: [{ model: Specialization, as: 'Specialization' }],
      });
    } catch (error) {
      throw 'Something went wrong!';
    }
  }

  async findOne(id): Promise<Associate> {
    try {
      return await this.associateRepository.findOne({
        where: { id },
        include: [{ model: Specialization, as: 'Specialization' }],
      });
    } catch (error) {
      throw 'Something went wrong!';
    }
  }

  async create(associate: AssociateDto): Promise<Associate> {
    try {
      const result = await this.associateRepository.create<Associate>({
        associateName: associate.associateName,
        phone: associate.phone,
        address: associate.address,
      } as Associate);
      const associateId = result.id;
      await this.updateLinkedSpecialization(
        associateId,
        associate.specializationIds,
      );
      return result;
    } catch (error) {
      throw 'Something went wrong!';
    }
  }

  getAssociateSpecializationDto(
    associateId: any,
    specializationIds: Array<number>,
  ): AssociateSpecializationDto {
    return {
      associateId: associateId,
      specializationIds: specializationIds,
    };
  }

  async update(id: number, associate: AssociateDto) {
    try {
      const [numberOfAffectedRows, [updatedPost]] =
        await this.associateRepository.update(
          {
            associateName: associate.associateName,
            phone: associate.phone,
            address: associate.address,
          } as Associate,
          { where: { id }, returning: true },
        );
      await this.updateLinkedSpecialization(id, associate.specializationIds);
      return { numberOfAffectedRows, updatedPost };
    } catch (error) {
      throw 'Something went wrong!';
    }
  }

  async remove(id: number) {
    try {
      await this.associateSpecializationService.remove(id);
      return await this.associateRepository.destroy({ where: { id } });
    } catch (error) {
      throw 'Something went wrong!';
    }
  }

  async updateLinkedSpecialization(
    associateId: number,
    specializationIds: Array<number>,
  ) {
    const associateSpecializationDto = this.getAssociateSpecializationDto(
      associateId,
      specializationIds,
    );
    await this.associateSpecializationService.save(associateSpecializationDto);
  }
}
