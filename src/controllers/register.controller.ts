import { Controller, Get, Post, Req } from '@nestjs/common';
import { RegisterService } from 'src/services/registerService';
import { Request } from 'express';

@Controller('register')
export class RegisterController {

    
    constructor(private readonly registerService: RegisterService) {}

    @Get()
    getHello(): string {          

     return 'test';   
    }

   @Post() 
   registerUser(@Req() req: Request)  {   

     
    
    this.registerService.registerUser(req.body)  

  }
} 