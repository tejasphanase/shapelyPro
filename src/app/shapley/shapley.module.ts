import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ShapleyRoutingModule } from './shapley-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { VideoComponent } from './video/video.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProjectDetailsComponent,
    PortfolioComponent,
    BlogComponent,
    VideoComponent
  ],
  imports: [
    CommonModule,
    ShapleyRoutingModule,
    MatIconModule
  ]
})
export class ShapleyModule { }
