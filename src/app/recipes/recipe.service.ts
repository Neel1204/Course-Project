import {Recipe} from './recipe.model';
import { Injectable} from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Egg Salad',
      'very good for Health & light Break-fast',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Egg', 2),
        new Ingredient('Avacardo', 3),
      ]),

    new Recipe(
      'Sprout Salad',
      'very Healthy & Heavy food for Protein Consumer',
      'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60',
      [
        new Ingredient('Sprouts', 30),
        new Ingredient('Curds', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.slService.addIngredients(ingredients);
  }
}
