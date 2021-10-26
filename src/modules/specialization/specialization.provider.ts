import {
  SPECIALIZATION_SERVICE,
  SPECIALIZATION_REPOSITORY,
} from '../../core/constants/index';
import { Specialization } from './entity/specialization.entity';
import { SpecializationService } from './specialization.service';

export const specializationServiceProvider = [
  {
    provide: SPECIALIZATION_SERVICE,
    useClass: SpecializationService,
  },
];

export const specializationProviders = [
  {
    provide: SPECIALIZATION_REPOSITORY,
    useValue: Specialization,
  },
];
