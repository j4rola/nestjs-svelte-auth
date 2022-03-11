import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';       
import { Model } from 'mongoose'
import { User } from '../models/userModel'
 

@Injectable()
export class RegisterService {               
    
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}   
  //Above, Model<> is a generic type. 
  //Generics are compound types that consist of a base type and a custom type. We bring the base Model<> 
  //from mongoose and then add our own User interface that we defined in the userModel file. 

  async registerUser(input): Promise<User> {  

        console.log(input)

        const { firstName, lastName, email, password} = input

        const newUser = new this.userModel({   
        firstName,
        lastName,
        email,
        password
        })

        const result = await newUser.save();
        console.log(result)
        return result

  }

  getHello(): string {                          
    return 'Hello World!';                           
  }

  

  getHi(): string {                         
    return 'Hi world';                      
  }                 

}