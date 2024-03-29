import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from '../../../environments/environment';
import { githubRepo } from '../../entities/githubRepo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Igithubservice } from './Igithubservice';

@Injectable({
  providedIn: 'root'
})
export class GithubService implements Igithubservice{

  constructor(private http:HttpClient) { }

  /**
   *
   * @returns github repository items list from fallback file
   */
  getAllReposFallback(): Observable<githubRepo[]> {
    return this.http.get<githubRepo[]>(environment.githubProfileApiUrlFallback).pipe(
      tap(c=>c.filter(item=>item.fork==false))
    );
  }

  /**
   *
   * @returns github repository items list from github api
   */
  getAllRepos() : Observable<githubRepo[]>{
    return this.http.get<githubRepo[]>(environment.githubProfileApiUrl).pipe(
        tap(c=>c.filter(item=>item.fork==false))
      );
   }

}
