import { Controller, Get, Inject, Post, Put, Delete } from '@nestjs/common';
import { IAssociates } from './interfaces/associate.interface';
import { ASSOCIATE_REPOSITORY } from '../../core/constants';

@Controller('associate')
export class AssociateController {
  constructor(
    @Inject(ASSOCIATE_REPOSITORY)
    private readonly _associate: IAssociates,
  ) {}

  @Get()
  findAll() {
    return this._associate.findAll();
  }

  @Get(':id')
  findOne() {
    return this._associate.findOne();
  }

  @Post()
  create(): Promise<any> {
    return this._associate.create();
  }

  @Put(':id')
  update() {
    return this._associate.update();
  }

  @Delete(':id')
  remove() {
    return this._associate.remove();
  }
}
