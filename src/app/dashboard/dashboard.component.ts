import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 visible:boolean = false;
 courses = [
  {"number": "Course 1"}
];
  Course: any;
  store: any;
  getvalue: string;
  constructor(private layoutService:LayoutService) { }

  ngOnInit() {
    
    this.layoutService.courseAdded.subscribe((courses)=>{
      this.store= localStorage.setItem('**course**',JSON.stringify(this.courses.push({"number": "Course " + (this.courses.length + 1)})));
      this.getvalue= localStorage.getItem('**course**');
      console.log(this.getvalue);
      

    });
   

  }
  showList(){
    console.log("show list");
    this.visible= !this.visible;
    
  }
  showGrid(){
    console.log("show grid");
    this.visible= this.visible;
    
  }
  addCourse($event){
    this.Course = $event;
    console.log("this.Course",this.Course);
    this.addNewCourse();
    
    
  }
  addNewCourse(){
    this.courses.push({"number": "Course " + (this.courses.length + 1)})
    console.log('hey',this.courses.length);
    

  }
  deleteCourse(number: string){
    this.courses.splice(this.courses.findIndex( (course)  =>  course.number === number ), 1 );

  }

}
