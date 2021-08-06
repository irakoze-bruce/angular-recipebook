import { Recipe } from './../../recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe!:Recipe
  @Output() recipeSelected = new EventEmitter<void>()

 

  onSelected(){

  this.recipeSelected.emit()
   
  
    
  }



  constructor() { }

  ngOnInit(): void {
  }

   

}
