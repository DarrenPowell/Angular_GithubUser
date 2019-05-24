import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GitHubService } from './github.service';



@Component({
  selector: 'github',
  styles: [`
    .img { position: relative; 
      float: left; 
      width:  100px; 
      height: 100px; 
      background-position: 
      50% 50%; background-repeat:  
       no-repeat; 
       background-size:  
          cover; }


  `],
  template: ` 
  <input class= "form-control" type="search"
  [formControl]="searchControl">
        <div *ngIf="isLoading">
          <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div> 
            <h3>GitHub User Results</h3>   
           <div *ngIf="isLoading"> 

              <i class="fa fa-spinner fa-spin fa-3x"></i>
           </div> 
               <div *ngFor="let user of users" class="media"> 
               <div class="media-left">
               <a [routerLink] = "['user', user.login, user.score]"> 
                   
                   <img class="media-object img" src="{{ user.avatar_url }}" alt="..."> 
               </a>
               
                </div> 
                </div>         
  `
})
export class GitHubComponent {
  isLoading = true;import
  users = [];
  searchControl = new FormControl();


  constructor(private _gitHubService: GitHubService) {


  }
  ngOnInit()
   { this.searchControl.valueChanges
    .pipe(filter(text => text.length >= 3),
     debounceTime(400),distinctUntilChanged())  
      .subscribe(value => 
        { this.isLoading = true; 
          this._gitHubService.getGitHubData(value) 
        .subscribe(data => 
          {this.isLoading = false;  
                this.users = data.items;   
                               });      
                                                    
  });    
 } 
}


   

