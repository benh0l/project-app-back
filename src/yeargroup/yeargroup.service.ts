import { Injectable } from '@nestjs/common';
import { CreateYearGroupDto } from './dto/create-yeargroup-dto';

@Injectable()
export class YearGroupService {

  constructor(){}

  create(createYearGroupDto: CreateYearGroupDto) {
    return undefined;
  }

  findAll() {
    return undefined;
  }
}
