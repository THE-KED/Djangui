import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cotisation-db',
  templateUrl: './cotisation-db.component.html',
  styleUrls: ['./cotisation-db.component.scss']
})
export class CotisationDBComponent {

  constructor(public dialogRef:MatDialogRef<CotisationDBComponent>) {
  }
}
