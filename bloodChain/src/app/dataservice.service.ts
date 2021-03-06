import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', 'http://localhost:8053');

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(public http:HttpClient) { 
    
  }

  registerDonor(details){
    console.log("inside service file -- registerDonor()==" +details);
    return this.http.post("http://localhost:8053/setDetails",details);
  }
  registerDonorList(){
    console.log("inside service file -- registerDonorList()==");
    return this.http.get("http://localhost:8053/getRegisterDonorArray");
  }
  addBloodRequest(details){
    console.log("inside service file -- addBloodRequest()==" +details);
    return this.http.post("http://localhost:8053/addBloodGroupRequest",details);
  }
  bloodRequestList(){
    console.log("inside service file -- bloodRequestList()==");
    return this.http.get("http://localhost:8053/getBloodGroupRequestArray");
  }

}
