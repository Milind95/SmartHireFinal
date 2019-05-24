import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFormPage } from './booking-form.page';

describe('BookingFormPage', () => {
  let component: BookingFormPage;
  let fixture: ComponentFixture<BookingFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
