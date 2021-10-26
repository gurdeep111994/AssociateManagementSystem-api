import { Sequelize } from 'sequelize-typescript';

import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

import { Associate } from '../../modules/associate/entity/associate.entity';
import { Specialization } from '../../modules/specialization/entity/specialization.entity';
import { AssociateSpecialization } from 'src/modules/associate-specialization/entity/associate-specialization.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async (): Promise<Sequelize> => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Specialization, Associate, AssociateSpecialization]);
      Associate.belongsToMany(Specialization, {
        as: 'Specialization',
        foreignKey: 'associateId',
        through: 'AssociateSpecialization',
      });
      Specialization.belongsToMany(Associate, {
        as: 'Associate',
        foreignKey: 'specializationId',
        through: 'AssociateSpecialization',
      });

      await sequelize.sync({});
      return sequelize;
    },
  },
];
