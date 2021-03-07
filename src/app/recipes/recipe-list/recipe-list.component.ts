import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   recipes: Recipe[] = [
     new Recipe('a test', 'very good', 'https://www.skinnytaste' +
       '.com/wp-content/uploads/2012/01/Stuffed-Cabbage-Casserole_-4.jpg'),
     new Recipe('a test', 'very good', 'https://www.skinnytaste' +
       '.com/wp-content/uploads/2012/01/Stuffed-Cabbage-Casserole_-4.jpg')];

  constructor() { }

  ngOnInit(): void {
  }

}
