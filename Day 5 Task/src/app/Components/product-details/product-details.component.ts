import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsServiceService } from '../../Services/products-service.service';
import { InterProduct } from '../../Interfaces/inter-product';
import { Location } from '@angular/common';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  curentPID: number = 0;
  prdDetails?: InterProduct | null = null;
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private productServ: ProductsServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.curentPID = Number(this.ActivatedRoute.snapshot.paramMap.get('pid'));
    console.log(this.curentPID);
    this.prdDetails = this.productServ.getProductBYID(this.curentPID);
    console.log(this.prdDetails);
  }

  goBack() {
    // window.history.back();
    this.location.back();
  }
}
