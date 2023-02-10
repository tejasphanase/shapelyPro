import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'project-details/:id',component:ProjectDetailsComponent},
  {path:'portfolio',component:PortfolioComponent},
  {path:'blog',component:BlogComponent},
  {path:'video',component:VideoComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShapleyRoutingModule { }
