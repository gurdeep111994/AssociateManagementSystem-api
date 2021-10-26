import { AssociateDto } from '../dto/associate.dto';
import { Associate as AssociateEntity } from '../entity/associate.entity';

export interface IAssociates {
  findAll(): Promise<AssociateEntity[]>;
  findOne(id: number): Promise<any>;
  create(AssociateDto: AssociateDto): Promise<AssociateEntity>;
  update(id: number, associate: AssociateDto): any;
  remove(id: number): any;
}
