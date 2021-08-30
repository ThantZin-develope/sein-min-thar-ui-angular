import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SysTranslateService } from 'src/app/services/sys-translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor(private translater: SysTranslateService, private router: Router, private changeDector: ChangeDetectorRef) { }

  is_init: boolean = true;
  today_date: Date = new Date()


  ngAfterViewInit(): void {

  }
  ngAfterViewChecked(): void {
    this.changeDector.detectChanges();
  }

  ngOnInit(): void {
    if (this.is_init) {
      this.router.navigateByUrl('/home/dashboard');
    }
}
}
