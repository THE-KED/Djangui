import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number|undefined): string {
    if(value){
      let  money :string= String(value);
      let sub1,sub2;
      for (let i=money.length;i>0;i--){
        sub1=money.slice(0,i)+" ";
        sub2=money.slice(i,money.length);
        if((money.length+1-i)%4==0)
          money =sub1.concat(sub2);
      }
      return money+"F";
    }
    return "0F";
  }
}
