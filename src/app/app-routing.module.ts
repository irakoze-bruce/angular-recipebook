import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

 {path:"",redirectTo:'/recipes', pathMatch:"full"},
{path:"recipes" ,component: RecipesComponent, children:[
  {path:"",component:RecipeStartComponent},
  {path:":id",component:RecipesDetailComponent}
]},
{path:"shoppingList",component:ShoppingListComponent}
];


@NgModule({
  
  declarations: [],
  imports: [

    RouterModule.forRoot(routes)
  ],
      exports: [RouterModule]


  
})
export class AppRoutingModule {

 }
