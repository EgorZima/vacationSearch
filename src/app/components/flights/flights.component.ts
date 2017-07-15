import { Component } from '@angular/core';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'flights',
  templateUrl: 'flights.component.html',
  styleUrls: ['flights.component.css']
})
export class FlightsComponent {
  startDate = '';
  endDate = '';
  from = '';
  to = '';

  constructor(private searchService: SearchService) {}

  clear() {
    this.startDate = '';
    this.endDate = '';
    this.from = '';
    this.to = '';
  }


  search() {
    let search = {
      startDate: this.startDate,
      endDate: this.endDate,
      item: this.from,
      item2: this.to
    };
    this.searchService.addSeacrh(search)

    this.clear()
  }
}
