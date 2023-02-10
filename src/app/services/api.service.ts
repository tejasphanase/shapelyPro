import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

   getLatestPro(){
    return this.http.get(`http://localhost:3000/latestProject`)
   }
   getLatestProjectById(id:number){
    return this.http.get(`http://localhost:3000/latestProject/${id}`)
   }
   getTopPostData(){
    return this.http.get(`http://localhost:3000/topPosts`)
   }
   getResentPost(){
    return this.http.get(`http://localhost:3000/resentPosts`)
   }
}
