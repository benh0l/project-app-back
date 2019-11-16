import { IsNotEmpty, IsMongoId} from 'class-validator';

export class GradeParams {

  @IsMongoId()
  @IsNotEmpty()
  id: string;

  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsMongoId()
  @IsNotEmpty()
  testId: string;

}
