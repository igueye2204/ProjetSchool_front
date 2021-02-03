import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetProfilComponent } from './get-profil.component';

describe('GetProfilComponent', () => {
  let component: GetProfilComponent;
  let fixture: ComponentFixture<GetProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
