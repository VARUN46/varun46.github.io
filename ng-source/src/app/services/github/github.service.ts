import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from '../../../environments/environment';
import { githubRepo } from '../../entities/githubRepo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }


  getAllRepos(){
    return this.http.get<githubRepo>(environment.githubProfileApiUrl).pipe(
        tap(c=>c.fork==false)
      );
   }

}
