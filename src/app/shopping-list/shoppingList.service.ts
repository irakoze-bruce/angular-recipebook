import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService{
  
ingredientChanger = new EventEmitter<Ingredient[]>(); 

 private ingredients:Ingredient[]=[
    new Ingredient('apple',10),
    new Ingredient ("bananas",5)

  ]

  getIngredient(){
   return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanger.emit(this.ingredients.slice())
  }


  addIngredients(ingredients:Ingredient[]){

    this.ingredients.push(...ingredients)
    this.ingredientChanger.emit(this.ingredients.slice())
    
  }

}