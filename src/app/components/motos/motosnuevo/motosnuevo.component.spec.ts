import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotosnuevoComponent } from './motosnuevo.component';

describe('MotosnuevoComponent', () => {
  let component: MotosnuevoComponent;
  let fixture: ComponentFixture<MotosnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotosnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotosnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
