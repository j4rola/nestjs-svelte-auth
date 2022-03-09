
import { Injectable } from '@nestjs/common';
 

@Injectable()
export class DashboardService { 

  getHello(): string {
    return 'Hello World!';  
  }


  getHi(): string {
    return 'Hi world' 
  }

}