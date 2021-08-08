import { ShoppingListService } from './shoppingList.service';
import { Ingredient } from './ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients!:Ingredient[]

  constructor( private shlService:ShoppingListService) { }

  ngOnInit(): void {
   this.ingredients=this.shlService.getIngredient() 
   this.shlService.ingredientChanger.subscribe((ingredients:Ingredient[])=>{
     this.ingredients=ingredients
   })
  }

 

}
