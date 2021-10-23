import { Injectable, Inject } from '@nestjs/common';
import { IAssociates } from './interfaces/associate.interface';
import { ISpecialization } from '../specialization/interfaces/specialization.interface';
import { SPECIALIZATION_REPOSITORY } from '../../core/constants/index';

@Injectable()
export class AssociateService implements IAssociates {
  constructor(
    @Inject(SPECIALIZATION_REPOSITORY)
    private readonly _specialization: ISpecialization,
  ) {}
  findAll() {
    throw new Error('Method not implemented.');
  }
  findOne() {
    throw new Error('Method not implemented.');
  }
  create() {
    throw new Error('Method not implemented.');
  }
  update() {
    throw new Error('Method not implemented.');
  }
  remove() {
    throw new Error('Method not implemented.');
  }
}
