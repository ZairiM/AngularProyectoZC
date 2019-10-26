import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';

@Component({
  selector: 'app-git-search-user',
  templateUrl: './git-search-user.component.html',
  styleUrls: ['./git-search-user.component.css']
})
export class GitSearchUserComponent implements OnInit {

  constructor(private GitSearchService: GitSearchService) { }
  searchResults: GitSearch;
  searchQuery: string;
  displayQuery: string;

  ngOnInit() {
    this.searchQuery = 'zairim'
    this.displayQuery = this.searchQuery;
    this.gitSearch();
   }
 
 gitSearch =()=>{
   this.GitSearchService.gitSearch(this.searchQuery).then((response)=>{
     this.searchResults = response;
     this.displayQuery= this.searchQuery;
     //alert('Total repositories found: '+response.total_count);
   },(error) => {
     alert('Error: '+ error.statusText);
   })
   
 
 }
}
