import { Ingredient } from './../shopping-list/ingredient.model';
export class Recipe{
  public imagePath!:string
  public name!:string
  public description!:string
  public ingredients!:Ingredient[]


  constructor(imagePath:string,name:string,description:string,ingredients:Ingredient[]){

    this.imagePath = imagePath
    this.name=name
    this.description = description
    this.ingredients=ingredients
    
  }

}