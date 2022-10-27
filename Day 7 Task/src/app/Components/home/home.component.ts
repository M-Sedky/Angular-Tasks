import { Component, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { AdsService } from '../../Services/ads.service';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private subscripe: Subscription[] = [];
  isUserLogged: boolean = false;
  constructor(
    private adsService: AdsService,
    private userAuth: UserAuthService
  ) {}

  ngOnInit(): void {
    // Observable ==> need to 3 functions
    // next --> get data
    // error --> catch errors
    // complete --> done

    // this.subscripe.push(
    // this.adsService.getAds(2).subscribe({
    //   next: (data: string) => {
    //     console.log(data);
    //   },

    //   error: (err: string) => {
    //     console.log(err);
    //   },

    //   complete: () => {
    //     console.log('complete');
    //   },
    // })
    // );

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
}
