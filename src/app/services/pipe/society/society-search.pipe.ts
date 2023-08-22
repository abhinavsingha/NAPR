import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'societySearch'
})
export class SocietySearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    return items.filter(it => {
      return it.name.toLowerCase().includes(searchText.toLowerCase())
        || it.address.toLowerCase().includes(searchText.toLowerCase())
        || it.contact_no.toLowerCase().includes(searchText)
    });

  }

}
