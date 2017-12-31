import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalInstrumentDetailComponent } from './musical-instrument-detail.component';

describe('MusicalInstrumentDetailComponent', () => {
  let component: MusicalInstrumentDetailComponent;
  let fixture: ComponentFixture<MusicalInstrumentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalInstrumentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalInstrumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
