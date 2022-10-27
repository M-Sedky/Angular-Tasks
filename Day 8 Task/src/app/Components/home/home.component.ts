import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { AdsService } from '../../Services/ads.service';
import { UserAuthService } from '../../Services/user-auth.service';
import { APIProductsService } from '../../Services/apiproducts.service';
import { InterProduct } from '../../Interfaces/inter-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Output() totalPriceChanged: EventEmitter<number>;

  private subscripe: Subscription[] = [];
  isUserLogged: boolean = false;
  page = 1;
  cats: any[] = [];
  products: InterProduct[] = [];
  totalPrice: number = 0;
  constructor(
    private adsService: AdsService,
    private userAuth: UserAuthService,
    private apiService: APIProductsService
  ) {
    this.totalPriceChanged = new EventEmitter<number>();
  }

  onScroll(): void {
    this.apiService
      .getPagination(++this.page)
      .subscribe((products: InterProduct[]) => {
        this.products.push(...products);
      });
  }

  ngOnInit(): void {
    this.apiService
      .getPagination(++this.page)
      .subscribe((products: InterProduct[]) => {
        this.products = products;
      });

    let observer = {
      next: (data: string) => {
        console.log(data);
      },

      error: (err: string) => {
        console.log(err);
      },

      complete: () => {
        console.log('complete');
      },
    };

    let filterObservable = this.adsService.getAds(2).pipe(
      filter((ads) => ads.includes('Sale')),
      map((ads) => 'AD: ' + ads)
    );
    let adSubscripe = filterObservable.subscribe(observer);
    this.subscripe.push(adSubscripe);
  }

  ngOnDestroy(): void {
    this.adsService
      .getAds(2)
      .subscribe({
        next: (data: string) => {
          console.log(data);
        },

        error: (err: string) => {
          console.log(err);
        },

        complete: () => {
          console.log('complete');
        },
      })
      .unsubscribe();
  }

  login() {
    this.userAuth.login('username', 'password');
    this.isUserLogged = this.userAuth.isUserLogged;
  }
  logout() {
    this.userAuth.logout();
    this.isUserLogged = this.userAuth.isUserLogged;
  }
  addToCart(proPrice: number, count: string) {
    this.totalPrice += proPrice * +count;
    this.totalPriceChanged.emit(this.totalPrice);
  }
}
