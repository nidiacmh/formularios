import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  noMeza(control: FormControl):{[s: string]: boolean}{
    if(control.value?.toLowerCase() === 'meza'){
      return{
        noMeza :true
      }
    }
    return null;
  }
}
