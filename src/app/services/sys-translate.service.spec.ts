/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SysTranslateService } from './sys-translate.service';

describe('Service: SysTranslate', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysTranslateService]
    });
  });

  it('should ...', inject([SysTranslateService], (service: SysTranslateService) => {
    expect(service).toBeTruthy();
  }));
});
