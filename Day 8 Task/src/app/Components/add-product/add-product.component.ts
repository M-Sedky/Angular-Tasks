import { Component, OnInit } from '@angular/core';
import { APIProductsService } from '../../Services/apiproducts.service';
import { InterProduct } from '../../Interfaces/inter-product';
import { Router } from '@angular/router';
import { InterCategory } from '../../Interfaces/inter-category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  catList: InterCategory[];
  newPrd: InterProduct = {} as InterProduct;
  constructor(private apiservice: APIProductsService, private route: Router) {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Phones' },
      { id: 4, name: 'Accessories' },
    ];
  }

  ngOnInit(): void {}

  addProduct() {
    // const newPrd: InterProduct = {
    //   id: 280,
    //   name: 'Iphone',
    //   price: 11000,
    //   quantity: 21,
    //   imageURL: 'https://placehold.jp/200x100.png',
    //   CategoryID: 3,
    // };

    const observer = {
      next: (prd: InterProduct) => {
        alert('Added Succesfully 😎');
        this.route.navigateByUrl('/products');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };
    this.apiservice.addProducts(this.newPrd).subscribe(observer);
  }
}
