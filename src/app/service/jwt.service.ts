import { Injectable } from '@angular/core';
import  jwt_decode from 'jwt-decode';
import { JwtHelperService } from "@auth0/angular-jwt";
import {map} from 'rxjs/operators';;

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  //const helper = new JwtHelperService();

  // const decodedToken = helper.decodeToken(token);
  // const expirationDate = helper.getTokenExpirationDate(myRtawToken);
  // const isExpired = helper.isTokenExpired(myRawToken);
  constructor() { }

  DecodeToken(token: string): string {
    return jwt_decode(token);
    }
}
