import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  ingredientName: string;
  ingredientAmount: string;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngedient() {
    const newIngredient: Ingredient = {
      name: this.ingredientName,
      amount: parseInt(this.ingredientAmount, 10)
    };

    this.shoppingListService.addIngredient(newIngredient);

    this.ingredientName = '';
    this.ingredientAmount = '';
  }

}
