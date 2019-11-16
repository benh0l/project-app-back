import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test-dto';

@Injectable()
export class TestService {

  constructor() {}

  create(createTestDto: CreateTestDto) {
    return undefined;
  }

  findAll() {
    return undefined;
  }
}
