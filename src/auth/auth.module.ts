import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRespository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, UsersRespository],
  controllers: [AuthController],
})
export class AuthModule {}
