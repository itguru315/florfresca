import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Transaction } from './../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class ApiPayuService {
  base64:string;
  private Url = 'https://sandbox.api.payulatam.com/payments-api/'; 
  private  headers:HttpHeaders;

  constructor(private http: HttpClient) { 
  	this.base64 = btoa("0zFBX55RdT5r972:ZCm8H3S6Udx4190hEMu6ACR17Z");
    // this.base64 = btoa("pRRXKOl8ikMmt9u:4Vj8eK4rloUd272L48hsrarnUA");
    // console.log(this.base64);
  }
  putPlan (query: any): Observable<any>{
    this.headers =  new HttpHeaders({ 'Content-Type': 'application/json', "Authorization":this.base64 })
    return this.http.post<any>(this.Url+"/auth/tokens", query, {headers: this.headers});
  }
  getPlan(query: any): Observable<any>{
    this.headers =  new HttpHeaders({ 'Content-Type': 'application/json',"Authorization":this.base64 })
    return this.http.post<any>(this.Url+"/auth/tokens", query, {headers: this.headers});
  }
  susbcriptions(T: Transaction): Observable<any>{
    this.headers =  new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      "Accept": "application/json",
      "Accept-language": "es",
      "Authorization":"Basic "+this.base64
    })
    return this.http.post<any>(this.Url+"rest/v4.9/subscriptions/", T, {headers: this.headers});
  }
}
