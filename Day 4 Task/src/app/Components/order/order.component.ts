import { Component, OnInit } from '@angular/core';
import { InterCategory } from 'src/app/Interfaces/inter-category';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  catList: InterCategory[];

  selectedCatID: number = 0;
  recivedTotalPrice: number = 0;

  constructor() {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Phones' },
    ];
  }

  ngOnInit(): void {}

  parentFunction(): void {}

  onTotalPriceChanged(total: number): void {
    this.recivedTotalPrice =total
  }
}
