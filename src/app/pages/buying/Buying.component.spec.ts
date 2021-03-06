/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BuyingComponent } from './Buying.component';

describe('BuyingComponent', () => {
  let component: BuyingComponent;
  let fixture: ComponentFixture<BuyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
