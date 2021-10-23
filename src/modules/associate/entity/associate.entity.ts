import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Specialization } from '../../specialization/entity/specialization.entity';

@Table
export class Associate extends Model<Associate> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  AssociateName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  Address: string;

  @ForeignKey(() => Specialization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  SpecializationId: number;

  @BelongsTo(() => Specialization)
  Specialization: Specialization;
}
