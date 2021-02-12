import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedProfilComponent } from './deleted-profil.component';

describe('DeletedProfilComponent', () => {
  let component: DeletedProfilComponent;
  let fixture: ComponentFixture<DeletedProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
