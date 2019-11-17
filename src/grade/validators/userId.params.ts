import { IsMongoId, IsNotEmpty } from 'class-validator';

export class UserIdParams {

  @IsMongoId()
  @IsNotEmpty()
  userId: string;

}
