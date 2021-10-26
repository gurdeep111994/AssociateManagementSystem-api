import { Module } from '@nestjs/common';

import { AssociateService } from './associate.service';
import { AssociateController } from './associate.controller';
import {
  associateProviders,
  associateServiceProviders,
} from './associate.provider';

import { SpecializationModule } from '../specialization/specialization.module';
import { AssociateSpecializationModule } from '../associate-specialization/associate-specialization.module';

@Module({
  imports: [SpecializationModule, AssociateSpecializationModule],
  providers: [
    AssociateService,
    ...associateProviders,
    ...associateServiceProviders,
  ],
  controllers: [AssociateController],
})
export class AssociateModule {}
