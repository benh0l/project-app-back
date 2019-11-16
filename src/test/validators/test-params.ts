import { IsNotEmpty, IsString } from 'class-validator';

export class TestParams {
  @IsString()
  @IsNotEmpty()
  id: string;
}
