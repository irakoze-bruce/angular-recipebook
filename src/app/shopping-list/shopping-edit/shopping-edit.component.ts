import { ShoppingListService } from './../shoppingList.service';
import { Ingredient } from './../ingredient.model';
import { Component, ElementRef, OnInit,ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef!:ElementRef;
  @ViewChild("amountInput") amountInputRef!:ElementRef
    

  constructor(private shl:ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount)
    this.shl.addIngredient(newIngredient)

    
  }

}
