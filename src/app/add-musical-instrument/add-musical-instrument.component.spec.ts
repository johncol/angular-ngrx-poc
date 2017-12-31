import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMusicalInstrumentComponent } from './add-musical-instrument.component';

describe('AddMusicalInstrumentComponent', () => {
  let component: AddMusicalInstrumentComponent;
  let fixture: ComponentFixture<AddMusicalInstrumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMusicalInstrumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicalInstrumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
