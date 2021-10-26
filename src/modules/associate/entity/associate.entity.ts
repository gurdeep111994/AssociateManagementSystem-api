import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Associate extends Model<Associate> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  associateName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;
}
