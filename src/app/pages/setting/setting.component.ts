import { Component, OnInit } from '@angular/core';
import { SysTranslateService } from 'src/app/services/sys-translate.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private translateService:SysTranslateService) { }

  ngOnInit() {
  }

  changeLang(lang:string){
    this.translateService.changeLanguage(lang);
  }
}
