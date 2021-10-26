import { Module } from '@nestjs/common';

import { SpecializationService } from './specialization.service';
import { SpecializationController } from './specialization.controller';
import {
  specializationProviders,
  specializationServiceProvider,
} from './specialization.provider';

@Module({
  providers: [
    SpecializationService,
    ...specializationServiceProvider,
    ...specializationProviders,
  ],
  controllers: [SpecializationController],
  exports: [
    SpecializationService,
    ...specializationServiceProvider,
    ...specializationProviders,
  ],
})
export class SpecializationModule {}
