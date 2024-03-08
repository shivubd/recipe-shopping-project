import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() emitIngredient = new EventEmitter<Ingredient>();
  //Here we are fetching nameInput using Local reference and amountInput using @ViewChild()
  @ViewChild('amountInput') amount: ElementRef | undefined ;
  onSubmit(name: HTMLInputElement) {
    this.emitIngredient.emit(new Ingredient(name.value, Number(this.amount?.nativeElement.value)))
  }
}
