import { Injectable } from '@nestjs/common';
import { CoursesEntity } from './entitis/courses.entity';

@Injectable()
export class CoursesService {

private course: CoursesEntity[] = [
    {id: 2, name: 'NestJS', describe: 'Aprendendo NESTJS'}
];

    async findAll() {
return this.course;
    }
   
    async findOne(id: number): Promise<CoursesEntity | undefined> {
        return this.course.find(course => course.id === id);
    }

    async createCourses(name: string, describe: string) {

        //gerando um id.
        const newId = Math.max(...this.course.map(course => course.id)) +1;

        const newCourse: CoursesEntity = {
            id: newId,
            name,
            describe
        };

        //adicionando ao array
        this.course.push(newCourse);

        //retornando o novo curso criado

        return newCourse;
    }
}
