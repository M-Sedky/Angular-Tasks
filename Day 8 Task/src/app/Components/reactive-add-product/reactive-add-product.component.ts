import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InterCategory } from '../../Interfaces/inter-category';
import { InterProduct } from '../../Interfaces/inter-product';
import { APIProductsService } from '../../Services/apiproducts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-add-product',
  templateUrl: './reactive-add-product.component.html',
  styleUrls: ['./reactive-add-product.component.css'],
})
export class ReactiveAddProductComponent implements OnInit {
  // FormGroup
  // FormControlName
  // FormControl

  addProduct: FormGroup;

  catList: InterCategory[];
  newPrd: InterProduct = {} as InterProduct;

  constructor(private apiservice: APIProductsService, private route: Router) {
    this.catList = [
      { id: 1, name: 'Laptops' },
      { id: 2, name: 'Tablets' },
      { id: 3, name: 'Phones' },
      { id: 4, name: 'Accessories' },
    ];

    this.addProduct = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', Validators.required),
      quantity: new FormControl('', Validators.required),
      imageURL: new FormControl('', Validators.required),
      CategoryID: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}


  get formControl() {
    return this.addProduct.controls
  }


  addProductRe() {
    let reactiveForm : InterProduct = this.addProduct.value as InterProduct
    const observer = {
      next: (prd: InterProduct) => {
        alert('Added Succesfully 😎');
        this.route.navigateByUrl('/products');
      },
      error: (err: Error) => {
        alert(err.message);
      },
    };
    this.apiservice.addProducts(reactiveForm).subscribe(observer);
  }
}
