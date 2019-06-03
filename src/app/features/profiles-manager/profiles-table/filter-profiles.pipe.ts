import { Pipe, PipeTransform } from '@angular/core';
import { ProfileSummary } from 'src/app/interfaces';

@Pipe({
  name: 'filterProfiles',
})
export class FilterProfilesPipe implements PipeTransform {

  transform(items: ProfileSummary[], searchString: string): ProfileSummary[] | number[] {
    if (!items || !searchString) {
      return items || [-1];
    }

    searchString = searchString.toLowerCase();

    const result = items.filter(item => {
      delete item.id;
      const keys = Object.keys(item);
      return keys.some(key => item[key].toString().toLowerCase().includes(searchString));
    });

    return result.length ? result : [-1];
  }

}
