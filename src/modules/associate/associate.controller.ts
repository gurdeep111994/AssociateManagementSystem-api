import {
  Controller,
  Get,
  Inject,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { IAssociates } from './interfaces/associate.interface';
import { ASSOCIATE_SERVICE } from '../../core/constants';
import { AssociateDto } from './dto/associate.dto';
import { Associate as AssociateEntity } from './entity/associate.entity';

@Controller('associate')
export class AssociateController {
  constructor(
    @Inject(ASSOCIATE_SERVICE)
    private readonly _associate: IAssociates,
  ) {}

  @Get()
  async findAll() {
    return await this._associate.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<any> {
    // find the post with this id
    const associate = await this._associate.findOne(id);

    // if the post doesn't exit in the db, throw a 404 error
    if (!associate) {
      throw new NotFoundException("This Associate doesn't exist");
    }

    // if post exist, return the post
    return associate;
  }

  @Post()
  async create(@Body() associate: AssociateDto): Promise<AssociateEntity> {
    return await this._associate.create(associate);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() associate: AssociateDto) {
    // get the number of row affected and the updated post
    const { numberOfAffectedRows, updatedPost } = await this._associate.update(
      id,
      associate,
    );

    // if the number of row affected is zero, it means the post doesn't exist in our db
    if (numberOfAffectedRows === 0) {
      throw new NotFoundException("This Associate doesn't exist");
    }

    // return the updated post
    return updatedPost;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    // delete the post with this id
    const deleted = await this._associate.remove(id);

    // if the number of row affected is zero, then the post doesn't exist in our db
    if (deleted === 0) {
      throw new NotFoundException("This Associate doesn't exist");
    }

    // return success message
    return 'Successfully deleted';
  }
}
