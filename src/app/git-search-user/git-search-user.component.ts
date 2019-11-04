import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {

  constructor(private GitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;

  ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap) => {
    this.searchQuery = params.get('query');
    this.displayQuery = params.get('query');
    this.gitSearch();
  })
  }
 
 gitSearch =()=>{
   this.GitSearchService.gitSearchUser(this.searchQuery).then((response)=>{
     this.searchResults = response;
     this.displayQuery= this.searchQuery;
   },(error) => {
     alert('Error: '+ error.statusText);
   })
 }

 sendQuery = () => {
  this.searchResults = null;
  this.router.navigate(['/searchUser/' + this.searchQuery])
}
}
