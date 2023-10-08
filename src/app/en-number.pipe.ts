import { Pipe, PipeTransform } from '@angular/core';
import {Enregistrement} from "../Models/Entitys/Enregistrement";

@Pipe({
  name: 'enNumber'
})
export class EnNumberPipe implements PipeTransform {

  transform(value: number|undefined): string {
    if(value)
    if(value == 0)
      return ""
    else
      return " "+(value+1);

    return "";
  }

}
