import { Component, OnInit } from '@angular/core';
import { APIDataService } from '../api-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: APIDataService) { }

  ngOnInit(): void {
  }

  search(searchTerm: string){
    if (searchTerm !== ''){
      this.dataService.getGifs(searchTerm);
        }
    }
}
