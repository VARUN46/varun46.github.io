import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { integrations } from '../../../commons/resources/integrations';
import { Observable } from 'rxjs';
import { githubGetReposResponse } from '../../entities/githubGetReposResponse';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  getProjects(username: string):Observable<Array<githubGetReposResponse>>{
    let endpoint = integrations.endpointTemplates.reposgithubTemplate.replace('{username}',username);
    let result = this.httpClient.get<Array<githubGetReposResponse>>(endpoint);
    return result;
  }
}
