import {
  ASSOCIATE_SPECIALIZATION_REPOSITORY,
  ASSOCIATE_SPECIALIZATION_SERVICE,
} from '../../core/constants/index';
import { AssociateSpecializationService } from './associate-specialization.service';
import { AssociateSpecialization } from './entity/associate-specialization.entity';

export const associateSpecializationServiceProviders = [
  {
    provide: ASSOCIATE_SPECIALIZATION_SERVICE,
    useClass: AssociateSpecializationService,
  },
];

export const associateSpecializationProviders = [
  {
    provide: ASSOCIATE_SPECIALIZATION_REPOSITORY,
    useValue: AssociateSpecialization,
  },
];
