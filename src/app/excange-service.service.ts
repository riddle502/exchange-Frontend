import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExcangeServiceService {

  private readonly BaseUrl="http://localhost:3000/"

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get<any>(this.BaseUrl+'getdata');
  }
  fetchandsaveData(){
    return this.http.get<any>(this.BaseUrl+'fetch-and-store');
  }
}
