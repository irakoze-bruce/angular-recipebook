
import { Subject } from "rxjs";
import { Ingredient } from "./ingredient.model";

export class ShoppingListService{
  
ingredientChanger = new Subject<Ingredient[]>(); 

 private ingredients:Ingredient[]=[
    new Ingredient('apple',10),
    new Ingredient ("bananas",5)

  ]

  getIngredient(){
   return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientChanger.next(this.ingredients.slice())
  }


  addIngredients(ingredients:Ingredient[]){

    this.ingredients.push(...ingredients)
    this.ingredientChanger.next(this.ingredients.slice())
    
  }

}