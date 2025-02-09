import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  }
  getMeals(meal:any):Observable<any>{
    return  this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`);
  }
}
