import 'dotenv/config'
import { Module } from '@nestjs/common'; 
import { AppController } from './app.controller'; 
import { AppService } from './app.service'; 
import { MongooseModule } from '@nestjs/mongoose'; 
import { LoginController } from './controllers/login.controller'; 
import { DashboardController } from './controllers/dashboard.controller'; 
import { LoginService } from './services/loginService'; 
import { DashboardService } from './services/dashboardService'; 
import { RegisterController } from './controllers/register.controller';
import { UserModule } from './modules/user.module';


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UserModule],    
  controllers: [AppController, LoginController, DashboardController, RegisterController],      
  providers: [AppService, LoginService, DashboardService],     
})

export class AppModule {}      
