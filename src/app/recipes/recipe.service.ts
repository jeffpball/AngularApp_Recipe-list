import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://cdn.pixabay.com/photo/2017/01/19/13/46/meatballs-1992354_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another Test Recipe', 
            'This is simply another test', 
            'https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 2)
            ])
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}