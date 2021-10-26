import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Specialization extends Model<Specialization> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  specializationName: string;
}
