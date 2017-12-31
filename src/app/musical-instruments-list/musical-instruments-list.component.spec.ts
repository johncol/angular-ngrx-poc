import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalInstrumentsListComponent } from './musical-instruments-list.component';

describe('MusicalInstrumentsListComponent', () => {
  let component: MusicalInstrumentsListComponent;
  let fixture: ComponentFixture<MusicalInstrumentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicalInstrumentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalInstrumentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
