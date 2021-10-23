import { SPECIALIZATION_REPOSITORY } from '../../core/constants/index';
import { SpecializationService } from './specialization.service';

export const specializationProviders = [
  {
    provide: SPECIALIZATION_REPOSITORY,
    useClass: SpecializationService,
  },
];
