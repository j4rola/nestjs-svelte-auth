import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { LoginController } from 'src/controllers/login.controller';
import { RegisterController } from 'src/controllers/register.controller';
import { UserSchema } from 'src/models/userModel';
import { LoginService } from 'src/services/loginService';
import { RegisterService } from 'src/services/registerService';

//This module brings in the database and allows us to inject it wherever we need to     
// talk to the db    

@Module({                     

    imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema }])],  
    controllers: [LoginController, RegisterController], 
    providers: [RegisterService, LoginService],  
    exports: [RegisterService]   
    

}) 

export class UserModule {}     
