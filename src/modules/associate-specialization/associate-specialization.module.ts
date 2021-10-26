import { Module } from '@nestjs/common';

import { AssociateSpecializationService } from './associate-specialization.service';
import { AssociateSpecializationController } from './associate-specialization.controller';
import {
  associateSpecializationProviders,
  associateSpecializationServiceProviders,
} from './associate-specialization.provider';

@Module({
  providers: [
    AssociateSpecializationService,
    ...associateSpecializationProviders,
    ...associateSpecializationServiceProviders,
  ],
  controllers: [AssociateSpecializationController],
  exports: [
    AssociateSpecializationService,
    ...associateSpecializationProviders,
    ...associateSpecializationServiceProviders,
  ],
})
export class AssociateSpecializationModule {}
