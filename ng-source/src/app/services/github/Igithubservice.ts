import { Observable } from "rxjs";
import { githubRepo } from "src/app/entities/githubRepo";

export interface Igithubservice
{
  /**
   * This method is to make actual api calls
   */
  getAllRepos() : Observable<githubRepo[]>;

  /**
   * This method is used to make call to fallback file in case of api failure
   */
  getAllReposFallback() : Observable<githubRepo[]>;
}
