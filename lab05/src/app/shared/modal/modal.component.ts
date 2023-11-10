import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/Products.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() public product: Product = {name: "", bought: false}
  @Input() public itemToDelete: Product = {name: "", bought: false}

  @Output() protected confirm: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected onConfirm(): void {
    this.confirm.emit(true);
  }

  protected onCancel(): void {
    this.confirm.emit(false);
    console.log(confirm)
  }
}
