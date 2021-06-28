import { Pipe, PipeTransform } from '@angular/core';
import { SalespersonListComponent } from './salesperson-list/salesperson-list.component';
import { Salesperson } from './salesperson.class';

@Pipe({
  name: 'searchSalesperson'
})
export class SearchSalespersonPipe implements PipeTransform {

  transform(sps: Salesperson[], searchCriteria: string): Salesperson[] {

    if(sps == null || searchCriteria.length ===0){
      return sps;
    }

    let search = searchCriteria.toLowerCase();
    let selectedSps: Salesperson[] = [];

    for(let s of sps){
      if(
        s.id.toString().includes(search)
          || s.name.toLowerCase().includes(search)
            || (s.sales !== null && s.sales.toString().toLowerCase().includes(search))
              || s.stateCode.toString().toLowerCase().includes(search)
      ){
        selectedSps.push(s);
      }
    }
    return selectedSps;
  }

}
