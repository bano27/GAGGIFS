import { Component, OnInit } from '@angular/core';
import { APIDataService } from "../api-data.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  trendingGifs : any;

  constructor(private dataService: APIDataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs()
    .subscribe(response => {
      this.trendingGifs = response['data'];
    })
  }
}
