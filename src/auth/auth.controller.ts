import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  async signUp(@Body() credentialsDto: AuthCredentialsDto): Promise<void> {
    await this.authService.singUp(credentialsDto);
  }

  @Post('/signin')
  async signIn(@Body() credentialsDto: AuthCredentialsDto): Promise<string> {
    return this.authService.signIn(credentialsDto);
  }
}
