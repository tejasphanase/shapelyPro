import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  resentPost:any
  topPosts:any
   constructor(private api:ApiService){}
   ngOnInit(){
    this.getResentPost()
    this. getTopPost()
   }
   getResentPost(){
    this.api.getResentPost().subscribe(res=>{
      this.resentPost=res
    })
   }
   getTopPost(){
    this.api.getTopPostData().subscribe(res=>{
        this.topPosts=res
    })
   }

}
