import { Component } from '@angular/core';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'hotels',
  templateUrl: 'hotels.component.html',
  styleUrls: ['hotels.component.css']
})
export class HotelsComponent {
  stars = ['★', '★★', '★★★', '★★★★', '★★★★★']
  startDate = '';
  endDate = '';
  amenities = '';
  location = '';
  
  constructor(private searchService: SearchService) {}

  clear() {
    this.startDate = '';
    this. endDate = '';
    this.amenities = '';
    this.location = '';
  }

  search() {
    let search = {
      startDate: this.startDate,
      endDate: this.endDate,
      item: this.amenities,
      item2: this.location
    };
    this.searchService.addSeacrh(search)

    this.clear()
  }
}
