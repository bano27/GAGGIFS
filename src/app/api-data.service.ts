import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class APIDataService {

  constructor(private http: HttpClient) { }

  getGifs(searchTerm: string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.giphyAPIkey}&limit=80`);
  }

  getTrendingGifs(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyAPIkey}&limit=80`);
  }

}
