import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepositoryDetails } from './RepositoryDetails';

@Injectable({
  providedIn: 'root'
})
export class FetchReposService {

  constructor(private http: HttpClient) {
  }

  getVarunRepos() {
    return this.http.get<RepositoryDetails[]>('https://api.github.com/users/varun46/repos');
  }

}
