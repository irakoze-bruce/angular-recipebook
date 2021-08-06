import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

{path:"" ,component: RecipesComponent},
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
