import { Injectable } from '@angular/core';
import { InterProduct } from '../Interfaces/inter-product';

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  private prdList: InterProduct[];

  constructor() {
    this.prdList = [
      {
        id: 1,
        name: 'HP',
        price: 18000,
        quantity: 0,
        imageURL:
          'https://m.media-amazon.com/images/I/51CRQleqoNL.__AC_SY300_SX300_QL70_ML2_.jpg',
        CategoryID: 1,
      },
      {
        id: 2,
        name: 'Dell',
        price: 21000,
        quantity: 100,
        imageURL:
          'https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/notebooks/latitude-notebooks/14-3420/media-gallery/peripherals_laptop_latitude_3420nt_gallery_1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=555&qlt=100,1&resMode=sharp2&size=555,402&chrss=full',
        CategoryID: 1,
      },
      {
        id: 3,
        name: 'Lenovo',
        price: 12000,
        quantity: 80,
        imageURL:
          'https://5.imimg.com/data5/EF/SS/MY-15479111/15-inch-lenovo-laptop-500x500.jpg',
        CategoryID: 1,
      },
      {
        id: 4,
        name: 'Huawei',
        price: 15000,
        quantity: 2,
        imageURL:
          'https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2F-66BT2GMAuO0WACCxpHkw0bCsQk%3D%2F0x0%3A2040x1360%2F2000x1333%2Ffilters%3Afocal(1040x1068%3A1041x1069)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F22908079%2Fakrales_211005_4788_0095.jpg&w=1200&q=75',
        CategoryID: 1,
      },
      {
        id: 5,
        name: 'Samsung',
        price: 11000,
        quantity: 1,
        imageURL: 'https://i.ebayimg.com/images/g/23MAAOSw17paqVDT/s-l500.jpg',
        CategoryID: 1,
      },

      {
        id: 6,
        name: 'Lenovo',
        price: 7000,
        quantity: 20,
        imageURL: 'https://m.media-amazon.com/images/I/41YJzTyQ37S._AC_.jpg',
        CategoryID: 2,
      },
      {
        id: 7,
        name: 'Samsung',
        price: 9000,
        quantity: 0,
        imageURL:
          'https://www.notebookcheck.net/fileadmin/Notebooks/Samsung/Galaxy_Tab_S8_Ultra_5G/4_to_3_Teaser_Samsung_Galaxy_Tab_S8_Ultra_1.jpg',
        CategoryID: 2,
      },
      {
        id: 8,
        name: 'Huawei',
        price: 15000,
        quantity: 2,
        imageURL:
          'https://m.media-amazon.com/images/I/611zfCqEnPL._AC_SX679_.jpg',
        CategoryID: 2,
      },
      {
        id: 9,
        name: 'Apple',
        price: 18000,
        quantity: 1,
        imageURL:
          'https://m.media-amazon.com/images/I/516KeVWQ2WL._AC_SX679_.jpg',
        CategoryID: 2,
      },

      {
        id: 10,
        name: 'Huawei',
        price: 12000,
        quantity: 25,
        imageURL:
          'https://ae01.alicdn.com/kf/H1436dbe79e514134b76029fc1f4b712fq.jpg',
        CategoryID: 3,
      },
      {
        id: 11,
        name: 'Apple',
        price: 26000,
        quantity: 0,
        imageURL:
          'https://m.media-amazon.com/images/I/61jLiCovxVL._AC_SX569_.jpg',
        CategoryID: 3,
      },
      {
        id: 12,
        name: 'Nokia',
        price: 3000,
        quantity: 2,
        imageURL: 'https://m.media-amazon.com/images/I/317-B8Ef8VS._AC_.jpg',
        CategoryID: 3,
      },
      {
        id: 13,
        name: 'Samsung',
        price: 4300,
        quantity: 1,
        imageURL: 'https://m.media-amazon.com/images/I/41ZqRyfCoFL._AC_.jpg',
        CategoryID: 3,
      },
      {
        id: 14,
        name: 'Redmi',
        price: 5600,
        quantity: 1,
        imageURL:
          'https://i01.appmifile.com/webfile/globalimg/0320/TO-B/web-small-banner/Redmi-Note-11S-5G.png?width=398&height=230&160516',
        CategoryID: 3,
      },
    ];
  }

  getAllProducts() {
    return this.prdList;
  }

  getProductsByCat(selectCatID: number): InterProduct[] {
    if (selectCatID == 0) {
      return this.prdList;
    } else {
      return this.prdList.filter((prd) => prd.CategoryID == selectCatID);
    }
  }

  getProductBYID(pID: number): InterProduct | null {
    let findProduct = this.prdList.find((prd) => prd.id == pID);
    return findProduct ? findProduct : null;
  }
}
