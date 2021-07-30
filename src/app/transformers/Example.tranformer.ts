import { HttpStatus, Injectable } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { Example } from '../entities/Example.entity';

@Injectable()
export class ExampleTransformer {
  public exampleTransformer(
    data: UpdateResult | [] | Example | Example[],
    message: string | null = null,
  ) {
    return {
      status: HttpStatus.OK,
      data,
      message,
    };
  }
}
