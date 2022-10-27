import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEGP'
})
export class USDtoEGPPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    return value/20;
  }

}
