import { Component } from '@angular/core';
import { SearchService } from '../../shared/search.service';

@Component({
  selector: 'cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css']
})
export class CarsComponent {
  types = ['ECONOMY', 'STANDART', 'PREMIUM']
  startDate = '';
  endDate = '';
  type = '';
  location = '';
  
  constructor(private searchService: SearchService) {}

  clear() {
    this.startDate = '';
    this. endDate = '';
    this.type = '';
    this.location = '';
  }


  search() {
    let search = {
      startDate: this.startDate,
      endDate: this.endDate,
      item: this.type,
      item2: this.location
    };
    this.searchService.addSeacrh(search)

    this.clear()
  }

  
}
