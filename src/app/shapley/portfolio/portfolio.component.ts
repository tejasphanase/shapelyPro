import { Component } from '@angular/core';
import { from, interval, Observable, take } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projectData: any
  constructor(private api: ApiService) { }
  ngOnInit() {
    this.getProjectData()
  }
  getProjectData() {
    this.api.getLatestPro().subscribe(res => {
      this.projectData = res
      console.log(this.projectData);
      
    })
  }
  // projectData2:any
  // setGetImageTime() {
  //   let Index = 0;
  //   const oneSecondInterval = interval(2000);
  //   oneSecondInterval.subscribe(val => {
  //     console.log(this.projectData[Index]);
  //     this.projectData2=this.projectData[Index]
  //      Index++;
  //     if (Index >= this.projectData.length) {
  //           Index=0
  //     }
  //   });

  //    }
}
