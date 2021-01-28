import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  passwordsIguales(pass1Name: string, pass2Name: string){
    return (formGruop: FormGroup) => {
      const pass1Control = formGruop.controls[pass1Name];
      const pass2Control = formGruop.controls[pass2Name];
      if(pass1Control.value === pass2Control.value){
        pass2Control.setErrors(null);
      }else{
        pass2Control.setErrors({noEsIgual: true});
      }
    }
  }
}
