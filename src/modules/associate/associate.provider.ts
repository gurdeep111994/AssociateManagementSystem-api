import {
  ASSOCIATE_REPOSITORY,
  ASSOCIATE_SERVICE,
} from '../../core/constants/index';
import { AssociateService } from './associate.service';
import { Associate } from './entity/associate.entity';

export const associateServiceProviders = [
  {
    provide: ASSOCIATE_SERVICE,
    useClass: AssociateService,
  },
];

export const associateProviders = [
  {
    provide: ASSOCIATE_REPOSITORY,
    useValue: Associate,
  },
];
