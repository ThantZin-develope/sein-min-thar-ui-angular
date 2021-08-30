import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { SysTranslateService } from '../services/sys-translate.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
success_id: string= '1';
error_id: string = '2';
info_id: string = '3';
warning_id: string = '4';
loading_id: string = '5';


constructor(private messageService: NzMessageService, private systranslater: SysTranslateService) {
 }

showMessage(type:number, message:string){
  switch(type){
    case 1:
    this.messageService.success(message).messageId = this.success_id;
    break;
    case 2:
    this.messageService.success(message).messageId = this.error_id;
    break;
    case 3:
    this.messageService.info(message).messageId = this.info_id;
    break;
    case 4:
    this.messageService.warning(message).messageId = this.warning_id;
    break;
    default:
    this.messageService.loading(message).messageId = this.loading_id;
    break;

  }
}
removeMessage(str_id:string){
  this.messageService.remove(str_id);
}

}
