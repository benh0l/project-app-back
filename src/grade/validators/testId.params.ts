import { IsMongoId, IsNotEmpty } from 'class-validator';

export class TestIdParams {

  @IsMongoId()
  @IsNotEmpty()
  testId: string;

}
