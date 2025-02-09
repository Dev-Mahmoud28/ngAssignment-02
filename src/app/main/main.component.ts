import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MealsService } from '../meals.service';
import { Imeals } from '../imeals';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit{

  mealsName:string[] = ['Beef','Breakfast','Chicken','Dessert','Goat','Lamb','Miscellaneous','Pasta','Pork','Seafood','Side','Starter','Vegan','Vegetarian'];
  private readonly mealsService = inject(MealsService);

  meals: Imeals[]= [];

  getCategory(meal:any):void{
    this.mealsService.getMeals(meal).subscribe({
      next:(res)=>{
        this.meals = res.meals;
      }
    })
  }

  getMeal():void{
    this.mealsService.getAll().subscribe({
      next:(res)=>{
        this.meals = res.meals;
        console.log(res.meals);
      }
    })
  }
  
ngOnInit(): void {
  this.getMeal();
}

}
