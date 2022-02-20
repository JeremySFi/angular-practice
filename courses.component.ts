import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: "courses",
    template: `
            <h2> {{ title }}</h2>
            <ul>
                <li *ngFor="let course of courses">
                    {{ course }}
                </li>   
            </ul>
    
    `
})

export class CoursesComponents {

    title = "List of Courses";
    courses: string[] | undefined;



    component(service: CoursesService){
        this.courses = service.getCourses();
    }

}
