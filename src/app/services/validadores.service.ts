import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Observable} from 'rxjs';

interface ErrorValidate{
[s: srting]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario(control: FormControl): Promise<ErrorValidate> | Observable<ErrorValidate>{
    if(control.value){
      return Promise.resolve(null);
    }
    return new Promise((resolve,reject) => {
      setTimeout(()=> {
        if(control.value === 'strider'){
          resolve({existe:true});
        }else{
          resolve(null);
        }
      },3500);
    });
  }

  noMeza(control: FormControl):ErrorValidate{
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
