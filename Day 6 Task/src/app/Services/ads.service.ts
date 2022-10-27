import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdsService {
  private adsList: string[] = [];

  // Observable ==> need to 3 functions
  // next --> get data
  // error --> catch errors
  // complete --> done

  constructor() {
    this.adsList = [
      'New Ads',
      'Sale up to 50%',
      'Sale up to 70%',
      '',
      'Big Sale',
    ];
  }

  // Observable ==> need to 3 functions
  getAds(time: number): Observable<string> {
    return new Observable<string>((observer) => {
      let counter = 0;
      let adsTime = setInterval(() => {
        // next --> get data
        observer.next(this.adsList[counter]);
        counter++;

        // complete --> done
        if (counter == this.adsList.length) {
          observer.complete();
        }

        // error --> catch errors
        if (this.adsList[counter] == '') {
          observer.error('ERROR: This Sale is Empty!');
        }
      }, time * 1000);
      // We have three methods for end observable (1)Complete (2)Error (3)Unsubscribe
      return {
        unsubscribe() {
          clearInterval(adsTime);
        },
      };
    });
  }
}
