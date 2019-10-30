import { Component, OnInit, Input } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ScormService } from 'src/app/services/scorm.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  @Input() courseContent:string[];
  @Input() pageContent:string[];
  public score = 0;
  public readonly maxScore = 100;
  public readonly minScore = 0;
  pages:string;
 
  show:boolean =false;
  course: string;
  page: string;
  page1: string;
  article: string;
  articles: string;
  block: string;
  blocks: string;
  component: string;
  components: string;
  courseObject: string;
  apiVersion: string;
  //newCourse: { _course: string; _page: string; _article: string; _block: string; _component: string; };

  constructor(private scormService:ScormService, private layoutService: LayoutService,private _http: HttpClient) { 
    this.apiVersion = scormService.apiVersion;
    this.score = scormService.score;
   }
   public   goToPage(score: number) {
    if (score >= this.minScore && score <= this.maxScore) {
      this.score = score;
      this.scormService.score = this.score;
    } else {
      this.score = score < this.minScore ? this.minScore : this.maxScore;
    }
  }

  public submitScore() {
    this.scormService.commit(); // Finally saves data to LMS
    this.scormService.terminate();
    window.close();
  }
  ngOnInit() {
    console.log('courses');
    
    
    this.layoutService.PageContentAdded.subscribe((data)=>{
      if(data){
        console.log("this is the data that comes in final-course.ts",data);
        console.log(typeof data);
        this.course = typeof(data)==='string'? JSON.parse(data): data;
        console.log('this.course',this.course); //COURSE
        this.page =this.course[0];
        console.log('page',this.page['_childInfo']);
        this.page1 = this.page['_childInfo'];
        console.log("page1", this.page1[0]); 
        this.pages = this.page1[0]; //PAGE
        this.article = this.pages['_childInfo'];
        this.articles = this.article[0]; //ARTICLE
        console.log('this.articles',this.articles);
        this.block = this.articles['_childInfo'];
        this.blocks=this.block[0];
        console.log('this.blocks',this.blocks);//BLOCK
        
        this.component =this.blocks['_childInfo'];
        console.log('this.component',this.component);
        this.components= this.component[0];
        console.log('this.components',this.components);//Component
       
        
 
        
      }else{
        console.log("No page array found");
      }     
  });
  }



    
    // console.log('click view button');
    // this.show = !this.show;
    // this.courseObject = localStorage.getItem('PageItem');

    // console.log('this.courseObject',this.courseObject);
    
    // this.layoutService.PageAdded.next(this.courseObject);
    
    //   this.router.navigate(['/final-course/course-object']);
   
  
}
