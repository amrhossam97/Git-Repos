import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(
    private httpClient: HttpClient
  ) { }
    getRepos(page:Number = 1){
      return this.httpClient.get('https://api.github.com/search/repositories?q=created:2017-10-22&sort=stars&order=desc&per_page=100&page='+page);
    }
}
