import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoadingService} from "../Services/loading.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit{

  showSpinner = false
  constructor(private spinnerService :LoadingService,private cdRef:ChangeDetectorRef) {
  }

  ngOnInit() {
    this.init();
  }

  init(){
    this.spinnerService.getSpinnerObserver().subscribe((status)=>{
      this.showSpinner=(status==='start');
      this.cdRef.detectChanges();
    });
  }
}
