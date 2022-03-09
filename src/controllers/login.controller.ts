import { Controller, Get, Post } from '@nestjs/common';
import { LoginService } from 'src/services/loginService';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) {}

    @Get()
    getHello(): string {

    return this.loginService.getHi();
  }
} 
