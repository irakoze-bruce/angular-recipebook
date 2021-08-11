import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 recipe!:Recipe
 id!:number

  constructor( private recipeService:RecipeService,private route:ActivatedRoute,private router:Router) { }
 
  addToChoppingList(){
    this.recipeService.addIngredientToChoppingList(this.recipe.ingredients) 
  }
  
  onEditRecipe(){
    this.router.navigate(["../",this.id,'edit'],{relativeTo:this.route})
  }
  ngOnInit(): void {

    this.route.params.subscribe((params:Params)=>{

      this.id = +params['id'];
      this.recipe=this.recipeService.getRecipe(this.id)
    })

  }

}
