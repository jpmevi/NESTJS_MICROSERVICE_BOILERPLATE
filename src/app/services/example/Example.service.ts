import { Injectable, NotFoundException } from '@nestjs/common';
import { ExampleProvider } from '../../providers/example/example.provider';
import { ExampleTransformer } from '../../transformers/Example.tranformer';
import {
  CreateExampleDto,
  FilterExampleDto,
  UpdateExampleDto,
} from '../../dtos/example.dto';
import ExampleRepository from '../../respositories/Example.repository';
import { ResponseType } from './example.types';

@Injectable()
export class ExampleService {
  constructor(
    private exampleRepository: ExampleRepository,
    private exampleProvider: ExampleProvider,
    private exampleTransformer: ExampleTransformer,
  ) {}

  /**
   * Return all data from Example table optionally with filters
   * @param {FilterExampleDto} params
   * @returns {Promise<ResponseType>}
   */
  async findAll(params?: FilterExampleDto): Promise<ResponseType> {
    if (params) {
      const { limit, offset } = params;
      const examplesFiltered = await this.exampleRepository.find({
        take: limit,
        skip: offset,
      });
      return this.exampleTransformer.exampleTransformer(examplesFiltered);
    }
    const examples = await this.exampleRepository.find();
    return this.exampleTransformer.exampleTransformer(examples);
  }

  /**
   * Return a Example data found by id
   * @param {number} id
   * @returns {Promise<ResponseType>}
   */
  async findOne(id: number): Promise<ResponseType> {
    const example = await this.exampleRepository.findOne(id);
    if (!example) {
      throw new NotFoundException(`Example ${id} not found`);
    }
    return this.exampleTransformer.exampleTransformer(example);
  }

  /**
   * Create a register in Example table
   * @param {CreateExampleDto} data
   * @returns {Promise<ResponseType>}
   */
  async create(data: CreateExampleDto): Promise<ResponseType> {
    const newCountry = this.exampleRepository.create(data);
    const exampleCreated = await this.exampleRepository.save(newCountry);
    return this.exampleTransformer.exampleTransformer(exampleCreated);
  }

  /**
   * Update a register with data passed by parameter and it found by id
   * @param {number} id
   * @param {UpdateExampleDto} data
   * @returns {Promise<ResponseType>}
   */
  async update(id: number, data: UpdateExampleDto): Promise<ResponseType> {
    const country = await this.exampleRepository.findOne(id);
    this.exampleRepository.merge(country, data);
    const response = await this.exampleRepository.save(country);
    return this.exampleTransformer.exampleTransformer(response);
  }

  /**
   * Set delete_at field from Example register found by id
   * @param {number} id
   * @returns {Promise<ResponseType>}
   */
  async remove(id: number): Promise<ResponseType> {
    const response = await this.exampleRepository.softDelete(id);
    return this.exampleTransformer.exampleTransformer(response);
  }

  /**
   * Search movie info by id
   * @param {number} id
   * @returns {Promise<any>}
   */
  async getMovieExample(id: number) {
    const movie = await this.exampleProvider.getMoviesById(id);
    return this.exampleTransformer.exampleTransformer(movie);
  }
}
