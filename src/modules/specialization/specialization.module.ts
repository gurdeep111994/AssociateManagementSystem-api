import { Module } from '@nestjs/common';

import { SpecializationService } from './specialization.service';
import { SpecializationController } from './specialization.controller';
import { specializationProviders } from './specialization.provider';

@Module({
  providers: [SpecializationService, ...specializationProviders],
  controllers: [SpecializationController],
  exports: [SpecializationService, ...specializationProviders],
})
export class SpecializationModule {}
