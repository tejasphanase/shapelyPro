import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {
  constructor(private _route:ActivatedRoute,private api:ApiService){}
  projectDetail:any
  topPosts:any
  resentPost:any
  ngOnInit(){
    this.getTopPost()
    this. getResentPosts()
    this._route.params.subscribe(res=>{
      if(res['id'])
      {
         this.getProjectById(res['id'])
      }
    })
  }
  getProjectById(id:number){
    this.api.getLatestProjectById(id).subscribe(res=>{
    this.projectDetail=res 
    })
  }
  getTopPost(){
    this.api.getTopPostData().subscribe(res=>{
        this.topPosts=res
        console.log(this.topPosts);   
    })
  }
  getResentPosts(){
     this.api.getResentPost().subscribe(res=>{
      this.resentPost=res
      console.log(this.resentPost);
    })
  }
}
