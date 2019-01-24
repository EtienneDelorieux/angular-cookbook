import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { RecipeIndexComponent } from './components/recipes/recipe-index/recipe-index.component';

// Directives
import { DropdownDirective } from './directives/dropdown.directive';

// Services
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeEditComponent } from './components/recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownDirective,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeIndexComponent,
    RecipeItemComponent,
    RecipeListComponent,
    RecipesComponent,
    ShoppingEditComponent,
    ShoppingListComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
