import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Pizza',
      'A super-tasty Pizza -just awesome!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdBfSaJeQTVU_BWCwq7vMRNpg-v6GiXZM6Yw&usqp=CAU',
      [new Ingredient('Bread', 1), new Ingredient('Sauce', 1)]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mbtg1wsd3zdqu3v3rpgd',
      [new Ingredient('Bun', 2), new Ingredient('Patty', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
