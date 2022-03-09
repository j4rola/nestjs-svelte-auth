import { Controller, Get, Post } from '@nestjs/common';  
import { DashboardService } from '../services/dashboardService'

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Get()
    getHello(): string {

    return this.dashboardService.getHi(); 
    }
    
}