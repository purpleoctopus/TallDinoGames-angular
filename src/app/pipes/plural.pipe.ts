import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plural',
  standalone: true
})
export class PluralPipe implements PipeTransform {
  transform(plurals: string[], value: number): string {
    const pluralRules = new Intl.PluralRules('uk');
    const form = pluralRules.select(value);
    switch (form) {
      case 'one':
        return plurals[0];
      case 'few':
        return plurals[1];
      default:
        return plurals[2];
    }
  }
}
