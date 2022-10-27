import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { InterCategory } from 'src/app/Interfaces/inter-category';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit, AfterViewInit {
  catList: InterCategory[];

  selectedCatID: number = 0;
  recivedTotalPrice: number = 0;

  @ViewChild('username') userName!: ElementRef; // non-null assertion

  @ViewChild(ProductsComponent) prodListComp!: ProductsComponent;

  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Phones' },
    ];
  }

  ngAfterViewInit(): void {
    // this.userName.nativeElement.value = 'enter you username';
    // this.userName.nativeElement.style.border = '3px solid red';
  }

  ngOnInit(): void {}

  parentFunction(): void {}

  onTotalPriceChanged(total: number): void {
    this.recivedTotalPrice = total;
  }

  completeOrder() {
    // this.prodListComp.prdList[0].quantity = -1;
  }
}
