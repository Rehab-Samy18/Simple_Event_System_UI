import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './_models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseurl = "http://localhost:8080/events";
  constructor(public http:HttpClient) { }
  getAllEvents(){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Event[]>(this.baseurl,{headers:httpHeaders});
  }
  createEvent(event:Event){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Event>(this.baseurl,event,{headers:httpHeaders})
  }
  deleteEvent(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<Event>(this.baseurl+"/"+id,{headers:httpHeaders})
  }
  getEvent(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Event>(this.baseurl+"/"+id,{headers:httpHeaders})
  }
  editEvent(event:Event){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Event>(this.baseurl+"/"+event._id,event,{headers:httpHeaders})
  }
}
