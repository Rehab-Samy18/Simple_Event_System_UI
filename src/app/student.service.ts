import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';
import { Event } from './_models/event';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseurl = "http://localhost:8080/students";
  constructor(public http:HttpClient) { }
  getAllStudents(){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Student[]>(this.baseurl,{headers:httpHeaders});
  }
  deleteStudent(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<Student>(this.baseurl+"/"+id,{headers:httpHeaders})
  }
  getStudent(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Student>(this.baseurl+"/"+id,{headers:httpHeaders})
  }
  editStudent(student:Student){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put<Student>(this.baseurl+"/"+student._id,student,{headers:httpHeaders})
  }
  showStudentEvents(id:number){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Event[]>(this.baseurl+"/events/"+id,{headers:httpHeaders})
  }
}
