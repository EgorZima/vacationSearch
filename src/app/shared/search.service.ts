import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
    searches = localStorage.getItem('searches');
    search = [];

    getSearches() {
        return JSON.parse(localStorage.getItem('searches')) 
    };

    addSeacrh(obj) { 
        if(!localStorage['searches']) {
            localStorage.setItem('searches', JSON.stringify(obj)) 
            return
        }
        let localSearch = JSON.parse(localStorage.getItem('searches'));

        for (let i = 0; i< localSearch.length; i++){
            this.search.push(localSearch[i])
        }
        this.search.push(obj)
        localStorage['searches'] = JSON.stringify((this.search))
    }
    
}


