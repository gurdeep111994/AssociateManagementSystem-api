import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './core/database/database.module';
import { AssociateModule } from './modules/associate/associate.module';
import { SpecializationModule } from './modules/specialization/specialization.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AssociateModule,
    SpecializationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
