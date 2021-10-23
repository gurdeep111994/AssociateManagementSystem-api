import { ASSOCIATE_REPOSITORY } from '../../core/constants/index';
import { AssociateService } from './associate.service';

export const associateProviders = [
  {
    provide: ASSOCIATE_REPOSITORY,
    useClass: AssociateService,
  },
];
