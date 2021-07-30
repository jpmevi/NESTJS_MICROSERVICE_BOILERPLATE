import { EntityRepository, Repository } from 'typeorm';
import { Example } from '../entities/Example.entity';

@EntityRepository(Example)
export default class ExampleRepository extends Repository<Example> {}
