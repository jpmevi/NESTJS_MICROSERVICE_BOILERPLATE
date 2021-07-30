import { Test, TestingModule } from '@nestjs/testing';
import { ExampleProvider } from '../../providers/example/example.provider';
import ExampleRepository from '../../respositories/Example.repository';
import { ExampleService } from '../../services/example/Example.service';
import { ExampleTransformer } from '../../transformers/Example.tranformer';
import { ExampleController } from './Example.controller';

describe('ExamplesController', () => {
  let controller: ExampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExampleController],
      providers: [
        ExampleService,
        ExampleRepository,
        ExampleProvider,
        ExampleTransformer,
      ],
    }).compile();

    controller = module.get<ExampleController>(ExampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
