import { Test, TestingModule } from '@nestjs/testing';
import { ExampleService } from 'src/app/services/example/Example.service';
import { ExampleController } from './Example.controller';

describe('CountriesController', () => {
  let controller: ExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [ExampleService],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
