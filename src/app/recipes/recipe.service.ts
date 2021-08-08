import { ShoppingListService } from './../shopping-list/shoppingList.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shopping-list/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService{
  recipeSelected=new EventEmitter<Recipe>()
  
 private recipes:Recipe[]=[
    new Recipe("https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg",
    "pizza",
    "delicious",
    [
      new Ingredient("meat",2),
     new Ingredient("frnch",20)
    
    ]),

    new Recipe("https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg",
    'Pizza2',
    'test',
    [
      new Ingredient("salad",12),
      new Ingredient("frnch",2)
    ])
  ]

  constructor(private shlService:ShoppingListService){}

  getRecipes(){

    return this.recipes.slice()
  }

  addIngredientToChoppingList(ingredients:Ingredient[]){

    this.shlService.addIngredients(ingredients)

  }
}