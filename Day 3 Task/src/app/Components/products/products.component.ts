import { Component, OnInit } from '@angular/core';
import { InterProduct } from '../../inter-product';
import { InterCategory } from '../../inter-category';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  prdList: InterProduct[];
  catList: InterCategory[];
  totalPrice: number = 0;

  selectedCatID: number = 0;

  constructor() {
    this.catList = [
      { catID: 0, name: 'All Categories' },
      { catID: 1, name: 'Laptops' },
      { catID: 2, name: 'Tablets' },
      { catID: 3, name: 'Phones' },
    ];
    this.prdList = [
      {
        id: 'DEV001',
        name: 'HP',
        price: 18000,
        quantity: 0,
        imageURL:
          'https://m.media-amazon.com/images/I/51CRQleqoNL.__AC_SY300_SX300_QL70_ML2_.jpg',
        CategoryID: 0,
      },
      {
        id: 'DEV002',
        name: 'Dell',
        price: 21000,
        quantity: 100,
        imageURL:
          'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=555&qlt=100,1&resMode=sharp2&size=555,402&chrss=full',
        CategoryID: 0,
      },
      {
        id: 'DEV003',
        name: 'Lenovo',
        price: 12000,
        quantity: 80,
        imageURL:
          'https://5.imimg.com/data5/EF/SS/MY-15479111/15-inch-lenovo-laptop-500x500.jpg',
        CategoryID: 0,
      },
      {
        id: 'DEV004',
        name: 'Huawei',
        price: 15000,
        quantity: 2,
        imageURL:
          'https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F-66BT2GMAuO0WACCxpHkw0bCsQk%3D%2F0x0%3A2040x1360%2F2000x1333%2Ffilters%3Afocal(1040x1068%3A1041x1069)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22908079%2Fakrales_211005_4788_0095.jpg&w=1200&q=75',
        CategoryID: 0,
      },
      {
        id: 'DEV005',
        name: 'Samsung',
        price: 11000,
        quantity: 1,
        imageURL: 'https://i.ebayimg.com/images/g/23MAAOSw17paqVDT/s-l500.jpg',
        CategoryID: 0,
      },
    ];
  }

  ngOnInit(): void {}
  ngOnChange() {}
  addToCart(proPrice: number, count: string) {
    console.log(count);
    console.log(typeof count);

    this.totalPrice += proPrice * +count;
  }
}
