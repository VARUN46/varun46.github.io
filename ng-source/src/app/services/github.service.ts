import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { githubItem } from '../entities/githubItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  public getRepos() : Observable<githubItem[]>{
    return this.http.get<githubItem[]>("https://api.github.com/users/VARUN46/repos");
  }
  
}
