import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './_models/student';

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
}
