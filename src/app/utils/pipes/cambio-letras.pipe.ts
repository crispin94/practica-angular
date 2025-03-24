import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const cambioLetras: { [key: string]: string } = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      'u': '9'
    };
    return value
      .split('')
      .map(char => cambioLetras[char.toLowerCase()] || char)
      .join('');
  }
}
