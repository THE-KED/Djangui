import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DataTestService} from "../Services/data-test.service";
import {Membre} from "../../Models/Entitys/Membre";

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  // standalone: true,
  // imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule],
})

export class MemberListComponent implements OnInit{

  mem:Membre[]= [];
  constructor(public dataServ:DataTestService) {
  }

  ngOnInit() {
    this.dataServ.logdatasize();
    this.dataServ.MemberSubject.subscribe((data:Membre[])=>{
      this.mem=data;
      console.log(this.mem[2].created_at)
    });
    this.dataServ.emit();
    this.dataServ.logdatasize();
  }


  columnsToDisplay = ['No', 'Nom', 'Poste'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement = this.mem[1];
}
