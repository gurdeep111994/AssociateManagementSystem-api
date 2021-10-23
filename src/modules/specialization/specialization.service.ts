import { Injectable } from '@nestjs/common';
import { ISpecialization } from './interfaces/specialization.interface';

@Injectable()
export class SpecializationService implements ISpecialization {
  add(): void {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!1111111111111111111111';
  }
}
