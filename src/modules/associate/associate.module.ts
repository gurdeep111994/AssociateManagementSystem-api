import { Module } from '@nestjs/common';

import { AssociateService } from './associate.service';
import { AssociateController } from './associate.controller';
import { associateProviders } from './associate.provider';

import { SpecializationModule } from '../specialization/specialization.module';

@Module({
  imports: [SpecializationModule],
  providers: [AssociateService, ...associateProviders],
  controllers: [AssociateController],
})
export class AssociateModule {}
