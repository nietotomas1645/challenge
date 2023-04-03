import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideNumbers'
})
export class HideNumbersPipe implements PipeTransform {
  transform(value: string): string {
    const first12Numbers = value.replace(/\s/g, '').slice(0, 12);
    const hiddenNumbers = first12Numbers.replace(/\d/g, '*');
    const visibleNumbers = value.replace(/\s/g, '').slice(12);
    const maskedValue = `${hiddenNumbers.match(/.{1,4}/g)?.join(' ') || ''} ${visibleNumbers}`;
    return maskedValue.trim();
  }
}