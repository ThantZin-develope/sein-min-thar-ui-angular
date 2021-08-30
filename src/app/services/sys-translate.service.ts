import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class SysTranslateService {

langType: number = 1;
constructor(private translateService: TranslateService) {
  this.translateService.use('en')
 }

changeLanguage(lang: any){
  lang == 'en' ? this.langType =1 : this.langType=2;
  this.translateService.use(lang)
}

}
