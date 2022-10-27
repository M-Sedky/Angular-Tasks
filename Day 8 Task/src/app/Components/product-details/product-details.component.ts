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
  currentPID: number = 0;
  prdDetails?: InterProduct | null = null;
  prdListId: number[] = [];
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private productServ: ProductsServiceService,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.currentPID = Number(this.ActivatedRoute.snapshot.paramMap.get('pid'));
    this.prdListId = this.productServ.getPrdIDs();
    this.ActivatedRoute.paramMap.subscribe((paramMap) => {
      this.currentPID = Number(paramMap.get('pid'));
      this.prdDetails = this.productServ.getProductBYID(this.currentPID);
    });
  }

  goBack() {
    this.location.back();
  }
  goPrev() {
    let currentIndex = this.prdListId.findIndex(
      (prdIndex) => prdIndex == this.currentPID
    );
    if (currentIndex > 0) {
      let prevPrd = this.prdListId[currentIndex - 1];
      this.router.navigate(['/products', prevPrd]);
    }
  }
  goNext() {
    let currentIndex = this.prdListId.findIndex(
      (prdIndex) => prdIndex == this.currentPID
    );
    if (currentIndex < this.prdListId.length - 1) {
      let nextPrd = this.prdListId[currentIndex + 1];
      this.router.navigate(['/products', nextPrd]);
    }
  }
}
