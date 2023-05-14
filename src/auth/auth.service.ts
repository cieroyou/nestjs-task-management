import { Injectable } from '@nestjs/common';
import { UsersRespository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRespository) {}
}
