import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Country } from '../entities/country.entity';
import {
  CreateCountryDto,
  FilterCountryDto,
  UpdateCountryDto,
} from '../dtos/country.dto';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(Country) private countryRepository: Repository<Country>,
  ) {}

  findAll(params?: FilterCountryDto) {
    if (params) {
      const { limit, offset } = params;

      return this.countryRepository.find({
        take: limit,
        skip: offset,
      });
    }
    return this.countryRepository.find();
  }

  async findOne(id: number) {
    const country = await this.countryRepository.findOne(id);
    if (!country) {
      throw new NotFoundException(`Country ${id} not found`);
    }
    return country;
  }

  create(data: CreateCountryDto) {
    const newCountry = this.countryRepository.create(data);
    return this.countryRepository.save(newCountry);
  }

  async update(id: number, data: UpdateCountryDto) {
    const country = await this.countryRepository.findOne(id);
    this.countryRepository.merge(country, data);
    return this.countryRepository.save(country);
  }

  remove(id: number) {
    return this.countryRepository.delete(id);
  }
}
