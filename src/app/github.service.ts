import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import {Repository} from './repository';
import {environment} from '../environments/environment';
import { Observable } from 'rxjs';



@Injectable()
export class GithubService {
  username: string;

  constructor(private http: HttpClient) {
    console.log('Github Service Ready...');
    this.username =  'carol-profile';

  }
  getUser():Observable<any> {
    return this.http.get('https://api.github.com/users/' + this.username)
  }
  getRepos():Observable<any> {
    return this.http.get(' https://api.github.com/users/' + this.username + '/repos')
    
}
updateUser(username: string) {
  this.username = username;
}
}