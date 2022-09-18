import { Observable } from "rxjs";
import { githubRepo } from "src/app/entities/githubRepo";

export interface Igithubservice
{
  getAllRepos() : Observable<githubRepo[]>;
  getAllReposFallback() : Observable<githubRepo[]>;
}
