import { Injectable } from '@angular/core';
import { Dropdown } from './../interface/dropdown'

@Injectable()
export class PersonDropdownService {

  hnrfc: Dropdown[] = [];

  constructor() { }

  /** Get the honorific */
  getHonorific() {
    return this.hnrfc = [{
      honorific: 'Mr.'
    },
    {
      honorific: 'Mrs.'
    }
    ];
  }
}
