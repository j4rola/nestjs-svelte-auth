import { Controller, Get, Post, Req } from '@nestjs/common';
import { RegisterService } from 'src/services/registerService';

@Controller('register')
export class RegisterController {

    
    constructor(private readonly registerService: RegisterService) {}

    @Get()
    getHello(): string {          

     return 'test';   
    }

  @Post() 
  registerUser() {

    const args = {firstName: "John", lastName: "Test", email: "jtest@gmail.com", password: "password"} 

    const {firstName, lastName, email, password} = args 
    
    this.registerService.registerUser(firstName, lastName, email, password)  

  }
} 