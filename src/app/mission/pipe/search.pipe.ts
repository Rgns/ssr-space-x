import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(years: string[], filter = ''): string[] {
    return years.filter(year => (year.toLowerCase().search(filter.toLowerCase()) !== -1));
  }
}
