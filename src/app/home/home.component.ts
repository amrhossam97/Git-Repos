import { Component, DoCheck, OnInit } from '@angular/core';
import { GitService } from '../_services/git.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  repos:any;
  currentPage = 1;
  constructor(
    private gitService:GitService,
  ) { }

  ngOnInit(): void {
    this.gitService.getRepos(this.currentPage).subscribe(
      (res:any)=>{
        this.repos=res.items;
        console.log(res);

      },
      (err)=>{console.error(err)},
      ()=>{}
    )
  }
  changePage(){
    this.gitService.getRepos(this.currentPage).subscribe(
      (res:any)=>{
        this.repos=res.items;
        console.log(res);

      },
      (err)=>{console.error(err)},
      ()=>{}
    )
  }
  calcDate(date:any){
    const createdAt = new Date(date);
    const now = new Date('2017-11-22');
    const differnceInMS = Math.abs(now.getTime() - createdAt.getTime())
    return Math.ceil(differnceInMS /(1000*60*60*24))
  }
}
