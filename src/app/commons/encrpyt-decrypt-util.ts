

import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { secretKey } from './constants';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class EnDeService {

  constructor(private messageService: MessageService) {

  }

  encryptData(data: any, is_plain_text = false): any {
    try {
      let result = CryptoJS.AES.encrypt(is_plain_text ? data : JSON.stringify(data), secretKey).toString();
      return result;
    } catch (error) {
      this.messageService.showMessage(2, error.toString());
      return null;
    }
  }

  decrpytData(data: any, is_plain_text = false): any {
    try {
      let result = CryptoJS.AES.decrypt(data, secretKey).toString(CryptoJS.enc.Utf8);
      if (!is_plain_text) {
        result = JSON.parse(result);
      }
      return result;
    } catch (error) {
      this.messageService.showMessage(2, error.toString());
      return null;
    }
  }

}



