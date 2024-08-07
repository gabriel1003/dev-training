import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {

    constructor(private coursesServer: CoursesService) {}

    @Get()
    findAll() {

        return this.coursesServer.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.coursesServer.findOne(id);
    }
}
