import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpcompetenceComponent } from './edit-grpcompetence.component';

describe('EditGrpcompetenceComponent', () => {
  let component: EditGrpcompetenceComponent;
  let fixture: ComponentFixture<EditGrpcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrpcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
