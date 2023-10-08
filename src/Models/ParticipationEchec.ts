import {Participation} from "./Entitys/Participation";

export  class ParticipationEchec{

  Echecs:Map<number,Participation[]> = new  Map<number, Participation[]>();

  constructor(list:Participation[]) {

    let temp:Participation[] | undefined = [];
    for (let participation of list){

      if(this.Echecs.has(participation.enregistrement.id)){
        temp = (this.Echecs.get(participation.enregistrement.id));
        temp?.push(participation);
        if(temp)
        this.Echecs.set(participation.enregistrement.id,temp);
        temp=[];
      }
      else {
          temp.push(participation);
          this.Echecs.set(participation.enregistrement.id,temp);
          temp=[];
      }
    }

  }
}
