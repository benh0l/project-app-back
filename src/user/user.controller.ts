import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  /* To Do
  // @Get(':id')
  findById(@Param() params: UserParams): Observable<UserEntity> {
    return 'This action returns a user by his id';
  }
  */
}
