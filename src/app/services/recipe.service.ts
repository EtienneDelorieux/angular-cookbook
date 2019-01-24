import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Raclette',
      'Plein de bonheur',
      'https://static.cuisineaz.com/400x320/i88809-raclette.jpg',
      [
        {name: 'Fromage', amount: 1000},
        {name: 'Charcuterie', amount: 750},
        {name: 'Patates', amount: 500},
      ],
    ),
    new Recipe(
      'Poulet Gaston Gerard',
      'Le poulet à la Dijonnaise',
      'https://cuisineetdecouvertes.files.wordpress.com/2012/11/p1790677_12.jpg',
      [
        {name: 'Poulet', amount: 1},
        {name: 'Moutarde', amount: 2},
        {name: 'Comte', amount: 3},
      ],
    ),
    new Recipe(
      'Risotto Chorizo',
      'Chaud chaud chaud chorizo',
      'https://static.cuisineaz.com/400x320/i138880-risotto-au-chorizo-et-legumes-frais.jpeg',
      [
        {name: 'Risotto', amount: 320},
        {name: 'Chorizo', amount: 1},
        {name: 'Poivrons', amount: 2},
        {name: 'Petit pois', amount: 80},
        {name: 'Mais', amount: 70},
      ],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
