import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Injectable()
export class UsersRespository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;
    console.log(`createUser ${username} ${password}`);
    const user = this.create({ username, password });
    await this.save(user);
  }
}
