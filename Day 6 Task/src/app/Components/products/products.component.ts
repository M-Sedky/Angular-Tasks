import {
  Component,
  Input,
  OnInit,
  OnChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { InterProduct } from '../../Interfaces/inter-product';
import { InterCategory } from 'src/app/Interfaces/inter-category';
import { USDtoEGPPipe } from 'src/app/Pipes/usdto-egp.pipe';
import { ProductsServiceService } from '../../Services/products-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() selectCatID: number = 0;
  @Output() totalPriceChanged: EventEmitter<number>;

  totalPrice: number = 0;
  showDate: Date;
  prdFilterCat: InterProduct[] = [];

  constructor(
    private productServ: ProductsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.totalPriceChanged = new EventEmitter<number>();

    this.showDate = new Date();
  }

  ngOnInit(): void {
    this.prdFilterCat = this.productServ.getAllProducts();
  }

  ngOnChanges(): void {
    this.prdFilterCat = this.productServ.getProductsByCat(this.selectCatID);
  }

  addToCart(proPrice: number, count: string) {
    this.totalPrice += proPrice * +count;
    this.totalPriceChanged.emit(this.totalPrice);
  }

  // prodDetails(pid: any) {
  //   this.router.navigate(['products', pid]);
  // }
}
