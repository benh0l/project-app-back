import { IsNotEmpty, IsMongoId} from 'class-validator';

export class TestParams {
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
