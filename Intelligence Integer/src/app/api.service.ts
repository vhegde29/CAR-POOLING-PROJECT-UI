import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './User';
import { Car } from './Car';
import { Regulartrip } from "./Regulartrip.1";



const remoteUrl = "http://localhost:9001";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  registerUser(user:User){
    return this.httpClient.post(remoteUrl+'/newuser/details',user);

  }
  userLogin(user:User){
    return this.httpClient.post(remoteUrl+'/newuser/login',user);
  }
  userUpdate(user:User){
    return this.httpClient.put(remoteUrl+'/updateuser/{email}',user);
  }
  addacar(car:Car){
    return this.httpClient.post(remoteUrl+'/car/cardetails',car);
  }
  createregulartrip(regulartrip:Regulartrip){
    return this.httpClient.post(remoteUrl+'/rtrip/rdetails',regulartrip);
  }
}
