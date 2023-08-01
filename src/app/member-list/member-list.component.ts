import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DataTestService} from "../Services/data-test.service";
import {Membre} from "../../Models/Entitys/Membre";
import {MembreServiceService} from "../Services/membre-service.service";
import {MatTableDataSource} from "@angular/material/table";

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

  mem:MatTableDataSource<Membre> = new MatTableDataSource<Membre>();
  constructor(private memberService :MembreServiceService) {
  }

  ngOnInit() {
    this.memberService.LoadMembres().subscribe(
      data=>{
        this.mem = new MatTableDataSource(data);
      }
    );
  }


  columnsToDisplay = ['No', 'Nom', 'Poste'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement = this.mem.data[1];
}
