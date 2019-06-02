import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchReposService {

  constructor(private http: HttpClient) {
  }

   getVarunRepos(){
    return this.http.get('https://api.github.com/users/varun46/repos');
   }
}
