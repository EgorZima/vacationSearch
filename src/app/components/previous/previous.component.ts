import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'previous',
  templateUrl: 'previous.component.html',
  styleUrls: ['previous.component.css']
})
export class PreviousComponent {
  searches = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searches = this.searchService.getSearches();
  }

  deleteSearch(item) {
    let searches = localStorage.getItem('searches')
    let parsedSearches = JSON.parse(searches)

    for(var i=0; i < parsedSearches.length; i++) {
      if(parsedSearches[i].item === item.item && parsedSearches[i].item2 === item.item2) { 
          parsedSearches.splice(i,1)
        }  
    }
    localStorage['searches'] = JSON.stringify((parsedSearches))

    this.ngOnInit();
  }
}
