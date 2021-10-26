import {
  Controller,
  Inject,
  Post,
  Delete,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { IAssociatesSpecialization } from './interfaces/associate-specialization.interface';
import { ASSOCIATE_SPECIALIZATION_SERVICE } from '../../core/constants';
import { AssociateSpecializationDto } from './dto/associate-specialization.dto';
import { AssociateSpecialization as AssociateSpecializationEntity } from './entity/associate-specialization.entity';

@Controller('associate-specialization')
export class AssociateSpecializationController {
  constructor(
    @Inject(ASSOCIATE_SPECIALIZATION_SERVICE)
    private readonly _associateSpecialization: IAssociatesSpecialization,
  ) {}

  @Post()
  async save(
    @Body() associateSpecialization: AssociateSpecializationDto,
  ): Promise<AssociateSpecializationEntity[]> {
    return await this._associateSpecialization.save(associateSpecialization);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    // delete the post with this id
    const deleted = await this._associateSpecialization.remove(id);

    // if the number of row affected is zero, then the post doesn't exist in our db
    if (deleted === 0) {
      throw new NotFoundException("This Post doesn't exist");
    }

    // return success message
    return 'Successfully deleted';
  }
}
