import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Associate } from 'src/modules/associate/entity/associate.entity';
import { Specialization } from '../../specialization/entity/specialization.entity';

@Table
export class AssociateSpecialization extends Model<AssociateSpecialization> {
  @ForeignKey(() => Associate)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  associateId: number;

  @BelongsTo(() => Associate)
  associate: Associate;

  @ForeignKey(() => Specialization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  specializationId: number;

  @BelongsTo(() => Specialization)
  specialization: Specialization;
}
