import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Speaker } from './_models/speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  baseurl = "http://localhost:8080/speakers";
  constructor(public http:HttpClient) { }
  getAllSpeakers(){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Speaker[]>(this.baseurl,{headers:httpHeaders});
  }
  deleteSpeaker(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<Speaker>(this.baseurl+"/"+id,{headers:httpHeaders})
  }
  getSpeaker(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Speaker>(this.baseurl+"/"+id,{headers:httpHeaders})
  }
  editSpeaker(speaker:Speaker){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Speaker>(this.baseurl+"/"+speaker._id,speaker,{headers:httpHeaders})
  }
}
