import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  latestProject:any
   constructor(private api:ApiService){}
   ngOnInit(){
    this. getLatestProject()
   }
   getLatestProject(){
    this.api.getLatestPro().subscribe(res=>{
     console.log(res);
     this.latestProject=res
    })
   }
}
