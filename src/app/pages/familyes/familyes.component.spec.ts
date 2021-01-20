import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyesComponent } from './familyes.component';

describe('FamilyesComponent', () => {
  let component: FamilyesComponent;
  let fixture: ComponentFixture<FamilyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
